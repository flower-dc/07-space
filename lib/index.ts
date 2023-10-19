export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://07-space-jbl5ddosw-flower-dc.vercel.app/'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}
