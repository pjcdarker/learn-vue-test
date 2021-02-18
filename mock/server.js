const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router(`${__dirname}/db.json`)
const middlewares = jsonServer.defaults()

server.use((req, resp, next) => {
    if (req.method === 'DELETE' && req.query['_cleanup']) {
        const db = router.db
        db.set('books', []).write()
        resp.sendStatus(204)
        return
    }

    next()
})

server.use(router)
    .use(middlewares)
    .listen(8081, () => {
        console.log('JSON Server is running.')
    })
