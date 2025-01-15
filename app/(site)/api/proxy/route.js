export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url') || 'https://backend.citiesprojectglobal.com/book-sample-pdf-view/'
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'text/html', // Expect HTML content
      },
      mode: 'no-cors',
      cache: 'no-store', // Avoid caching for fresh content
    })

    if (!response.ok) {
      return new Response('Error fetching content', { status: response.status })
    }

    const content = await response.text() // Convert response to plain text (HTML)

    // Return HTML content in response
    return new Response(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    })
  } catch (error) {
    console.error('Error fetching content:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
