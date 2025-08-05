import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Supabase 클라이언트 초기화 함수
function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase 환경 변수가 설정되지 않았습니다.');
  }
  
  return createClient(supabaseUrl, supabaseKey);
}

// make.com webhook URL (실제 환경에서는 환경변수로 관리)
const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL || 'https://hook.eu1.make.com/your-webhook-url';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, date } = await request.json();

    // 입력 검증
    if (!name || !email || !phone || !date) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // Supabase 클라이언트 생성
    const supabase = createSupabaseClient();

    console.log('Supabase 연결 시도:', {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasServiceRoleKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      usingKey: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'service_role' : 'anon'
    });

    // 1. Supabase에 데이터 저장
    const { data: supabaseData, error: supabaseError } = await supabase
      .from('전화번호 발송')
      .insert([
        {
          "Name": name,
          "Email": email,
          "Phone": phone,
          "created_at": new Date().toISOString(),
        }
      ])
      .select('id, "Name", "Email", "Phone", created_at')
      .single();

    if (supabaseError) {
      console.error('Supabase 저장 오류:', supabaseError);
      
      // RLS 관련 오류인지 확인
      if (supabaseError.message.includes('RLS') || supabaseError.message.includes('policy')) {
        return NextResponse.json(
          { 
            error: '권한 오류: RLS 정책을 확인해주세요.',
            details: supabaseError.message,
            code: supabaseError.code
          },
          { status: 403 }
        );
      }
      
      return NextResponse.json(
        { 
          error: '데이터 저장 중 오류가 발생했습니다.',
          details: supabaseError.message,
          code: supabaseError.code
        },
        { status: 500 }
      );
    }

    // make.com webhook은 프론트엔드에서 직접 호출하므로 여기서는 Supabase 저장만 처리

    return NextResponse.json({
      success: true,
      data: {
        id: supabaseData.id,
        name: supabaseData.Name,
        email: supabaseData.Email,
        phone: supabaseData.Phone,
        date: date,
        status: 'processed',
        created_at: supabaseData.created_at,
      },
      message: '데모 신청이 성공적으로 처리되었습니다.',
    });

  } catch (error) {
    console.error('데모 API 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Supabase 클라이언트 생성
    const supabase = createSupabaseClient();
    
    // 최근 데모 요청 조회
    const { data, error } = await supabase
      .from('전화번호 발송')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) {
      console.error('데모 요청 조회 오류:', error);
      return NextResponse.json(
        { error: '데이터 조회 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });

  } catch (error) {
    console.error('데모 조회 API 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 