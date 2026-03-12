export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin-panel', // Keeps your management page private
          '/api/',        // Prevents bots from crawling your internal API routes
        ],
      },
    ],
    sitemap: 'https://gpay-rewards-frontend.vercel.app/sitemap.xml',
  }
}