import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 환경변수가 유효한지 확인하는 함수
const isValidSupabaseConfig = (url: string | undefined, key: string | undefined) => {
  if (!url || !key) return false;
  if (url === 'your_supabase_url_here' || key === 'your_supabase_anon_key_here') return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// 환경변수가 유효하면 클라이언트 생성, 아니면 null 반환
export const supabase = isValidSupabaseConfig(supabaseUrl, supabaseAnonKey)
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;