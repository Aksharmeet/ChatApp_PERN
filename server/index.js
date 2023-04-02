const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require('./routers/authRouter')

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
app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true,
	})
)
app.use(express.json())
app.use('/auth', authRouter)

app.get('/', (req, res) => {
	res.send('Hello World!')
})

httpServer.listen(4000, () => {
	console.log('listening on *:4000')
})
