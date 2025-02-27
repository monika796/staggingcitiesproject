
import { request, gql } from 'graphql-request';

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_URL;

// Fetch all pages to generate static paths
export async function generateStaticParams() {
  const query = gql`
    query GetAllPages {
      pages {
        nodes {
          slug
        }
      }
    }
  `;

  const data = await request(GRAPHQL_ENDPOINT, query);

  return data.pages.nodes.map((page) => ({
    slug: page.slug,
  }));
}

// Fetch data for each page dynamically
export default async function Page({ params }) {
  const query = gql`
    query GetPageBySlug($slug: String!) {
      pageBy(uri: $slug) {
        title
        content
      }
    }
  `;

  const data = await request(GRAPHQL_ENDPOINT, query, { slug: params.slug });

  if (!data.pageBy) {
    return <h1>Page Not Found</h1>;
  }

  return (
    <div>
      <h1>{data.pageBy.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.pageBy.content }} />
    </div>
  );
}
