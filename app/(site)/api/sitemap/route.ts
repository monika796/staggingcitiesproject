// app/api/sitemap/route.ts

import { NextResponse } from 'next/server';
import { fetchData } from '@/lib/fetchData'; // Your data fetching function
import { ARTICLES_QUERY } from '@/queries/queries'; // Your query

export async function GET() {
  try {
    // Fetch the post data from WordPress
    const postData = await fetchData(ARTICLES_QUERY);
    const allPosts = [
      ...(postData?.featuredPosts?.nodes || []),
      ...(postData?.otherPosts?.nodes || []),
    ];

    // Remove duplicates based on `id`
    const uniquePosts = Array.from(new Map(allPosts.map(post => [post.id, post])).values());

    // Generate the URL set from the posts
    const urlSet = uniquePosts
      .map(post => {
        const date = new Date(post.date);
        const formatDate = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });

        return `
          <url>
            <loc>${process.env.NEXT_PUBLIC_SITEMAP_URL}/${post.slug}</loc>
            <lastmod>${post.date}</lastmod>
          </url>
        `;
      })
      .join('');

    // Create the full sitemap XML structure
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urlSet}
      </urlset>`;

    // Return the XML response
    return new NextResponse(sitemapXml, {
      headers: { 'Content-Type': 'application/xml' },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
