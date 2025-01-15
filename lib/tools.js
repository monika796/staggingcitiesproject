export function getSlugsFromUrl(url) {
  try {
    const urlObj = new URL(url)
    return urlObj.pathname
  } catch (error) {
    console.error('Invalid URL:', error)
    return ''
  }
}
