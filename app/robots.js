// This file defines the robots.txt configuration for the application, which tells search engines how to crawl and index the site. It specifies which parts of the site should be allowed or disallowed for crawling, and also provides a link to the sitemap for better SEO.

// The robots.txt file is a standard used by websites to communicate with web crawlers and search engines. It specifies which parts of the website should be crawled and indexed, and which parts should be ignored. In this configuration, we allow all user agents to crawl the entire site except for the /admin-panel, which is disallowed to prevent it from appearing in search results. Additionally, we provide a link to the sitemap.xml file, which helps search engines understand the structure of the site and find all the important pages for indexing.
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin-panel', // 💡 We hide the admin panel so it doesn't show up in search results
    },
    // sitemap: 'https://your-site.vercel.app/sitemap.xml', // Update this after deployment
  }
}