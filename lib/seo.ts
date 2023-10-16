export const seo = {
  title: '大聪花 | 开发者',
  description:
    '我叫大聪花，一名开发者。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
