// import { getTranslation } from "@/app/(site)/api/translate";
// import { cookies } from "next/headers";


// export default async function Home() {
//     // Get user-selected language from cookies (default: English)
//     const cookieStore = cookies();
//     const lang = cookieStore.get("lang")?.value || "en";
  
//     // GraphQL query to fetch posts from WordPress
//     const query = gql`
//       {
//         posts(first: 5) {
//           nodes {
//             id
//             title
//             content
//           }
//         }
//       }
//     `;
  
//     try {
//       // Fetch posts from WordPress GraphQL API
//       const data = await request(WP_GRAPHQL_ENDPOINT, query);
//       const posts = data.posts.nodes;
  
//       // Translate WordPress content on the server
//       const translatedPosts = await Promise.all(
//         posts.map(async (post) => ({
//           id: post.id,
//           title: await getTranslation(post.title, lang),
//           content: await getTranslation(post.content, lang),
//         }))
//       );
  
//       return (
//         <main>
//           <h1>WordPress Posts (Translated)</h1>
//           {translatedPosts.map((post) => (
//             <div key={post.id}>
//               <h2>{post.title}</h2>
//               <div dangerouslySetInnerHTML={{ __html: post.content }} />
//             </div>
//           ))}
//         </main>
//       );
//     } catch (error) {
//       console.error("Error fetching WordPress data:", error);
//       return <h1>Failed to load content</h1>;
//     }
//   }