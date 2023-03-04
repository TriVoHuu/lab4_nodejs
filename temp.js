const http = require('http')
const URL = require('url')
const querySring = require('querystring')

const server = http.createServer((req,res) => {
    res.writeHead(200, {
        'Content-Type':'text/html; charset=utf-8'
    })
    res.end('trí')
})

server.listen(8080, () => {
    console.log("server is running at http://localhost:8080")
})