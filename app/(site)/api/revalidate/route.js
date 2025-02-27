import { revalidatePath } from 'next/cache'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const secret = searchParams.get('secret')
  const url = searchParams.get('url')
console.log(url);
  if (secret !== process.env.MY_SECRET_TOKEN) {
    return new Response(JSON.stringify({ message: 'Invalid token' }), { status: 401 })
  }

  if (url) {
    revalidatePath(url)
    return new Response(JSON.stringify({ revalidated: true, now: Date.now() }), { status: 200 })
  }

  return new Response(
    JSON.stringify({
      revalidated: false,
      now: Date.now(),
      message: 'Missing path to revalidate',
    }),
    { status: 400 },
  )
}
