export const emailConfig = {
  from: 'dconghua@gmail.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? 'https://07-space-jbl5ddosw-flower-dc.vercel.app/'
      : 'http://localhost:3000',
}
