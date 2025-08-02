import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 아바타 생성 유틸리티 함수들
export function generateAvatar(name: string, gender: 'male' | 'female', style: 'avataaars' | 'personas' | 'bottts' = 'avataaars') {
  const seed = encodeURIComponent(name);
  const genderParam = gender === 'male' ? 'male' : 'female';
  
  // 다양한 색상 팔레트
  const colorPalettes = [
    'b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf', // 파스텔 톤
    '264653,2a9d8f,e9c46a,f4a261,e76f51', // 어스 톤
    'ff6b6b,4ecdc4,45b7d1,96ceb4,ffeaa7', // 비비드 톤
    'a8e6cf,dcedc1,ffd3b6,ffaaa5,ff8b94', // 소프트 톤
  ];
  
  const randomColors = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
  
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}&gender=${genderParam}&backgroundColor=${randomColors}`;
}

export function generateBoringAvatar(name: string) {
  const colors = [
    '264653,2a9d8f,e9c46a,f4a261,e76f51',
    'ff6b6b,4ecdc4,45b7d1,96ceb4,ffeaa7',
    'a8e6cf,dcedc1,ffd3b6,ffaaa5,ff8b94',
    'b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf'
  ];
  
  const randomColors = colors[Math.floor(Math.random() * colors.length)];
  const seed = encodeURIComponent(name);
  
  return `https://source.boringavatars.com/beam/120/${seed}?colors=${randomColors}`;
}

export function generatePersonaAvatar(name: string, gender: 'male' | 'female') {
  const seed = encodeURIComponent(name);
  const genderParam = gender === 'male' ? 'male' : 'female';
  
  return `https://api.dicebear.com/7.x/personas/svg?seed=${seed}&gender=${genderParam}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;
}

export function generateBotAvatar(name: string) {
  const seed = encodeURIComponent(name);
  
  return `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;
}
