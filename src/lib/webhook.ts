// Webhook 설정
export const WEBHOOK_CONFIG = {
  // 공통 시크릿 키
  SECRET: process.env.WEBHOOK_SECRET || "your-webhook-secret",
  
  // 각 워크플로우별 URL
  URLS: {
    INDEX: process.env.INDEX_WEBHOOK_URL || "https://hook.eu1.make.com/your-index-workflow",
    DEMO: process.env.DEMO_WEBHOOK_URL || "https://hook.eu1.make.com/your-demo-workflow",
  }
};

// Webhook 데이터 전송 함수
export async function sendWebhook(workflow: 'INDEX' | 'DEMO', data: any) {
  try {
    const response = await fetch(WEBHOOK_CONFIG.URLS[workflow], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Webhook-Secret': WEBHOOK_CONFIG.SECRET,
      },
      body: JSON.stringify({
        ...data,
        workflow: workflow,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Webhook error for ${workflow}:`, error);
    throw error;
  }
} 