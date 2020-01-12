export async function handler(event, context) {
  return {
    statusCode: 200,
    //headers: { "content-type": "text/plain" },
    body: JSON.stringify(event, null, 2)
  }
}