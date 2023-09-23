/**
 * Thank you to https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module
 */
import { createServer, IncomingMessage, ServerResponse } from 'node:http'
import { extname, join } from 'node:path'
import { readFile } from 'node:fs'

const host = process.env.HOST ?? 'localhost'
const envPort = parseInt(process.env.PORT ?? '', 10)
const port = isNaN(envPort) ? 8080 : envPort

const CONTENT_TYPES = {
 js: 'text/javascript',
}

const PUBLIC_PATH = join(__dirname, 'public')

function servePublic(url: string, response: ServerResponse) {
 const filepath = join(PUBLIC_PATH, url)
 readFile(filepath, function (err, data) {
  if (err) {
   console.error(err)
   response.statusCode = 404
   return response.end('File not found or you made an invalid request.')
  }

  let mediaType = 'text/html'
  const ext = extname(filepath)
  if (ext.length > 0 && CONTENT_TYPES.hasOwnProperty(ext.slice(1))) {
   mediaType = CONTENT_TYPES[ext.slice(1)]
  }

  response.setHeader('Content-Type', mediaType)
  response.end(data)
 })
}

const requestListener = function (
 message: IncomingMessage,
 response: ServerResponse
) {
 console.log(message.method, message.url)
 if (message.url === '/') {
  return servePublic('./index.html', response)
 } else if (message.url?.startsWith('/client-bundle')) {
  return servePublic('.' + message.url, response)
 }

 response.writeHead(200)
 response.end('My first server!')
}

const server = createServer(requestListener)
server.listen(port, host, () => {
 console.log(`Server is running on http://${host}:${port}`)
})
