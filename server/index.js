const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const helmet = require('helmet')

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
		credentials: true,
	},
})

io.on('connect', (socket) => {
	console.log('a user connected')
	socket.on('disconnect', () => {
		console.log('user disconnected')
	})
})

app.use(helmet())
app.use((express.json(), express.urlencoded({ extended: true })))

app.get('/', (req, res) => {
	res.send('Hello World!')
})

httpServer.listen(4000, () => {
	console.log('listening on *:4000')
})
