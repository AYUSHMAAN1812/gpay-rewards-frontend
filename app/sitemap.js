export default function sitemap() {
  // Replace this with your actual Vercel URL once the site is live
  const baseUrl = 'https://your-site.vercel.app'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/admin-panel`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3, // Low priority because users shouldn't find this easily
    },
  ];
}