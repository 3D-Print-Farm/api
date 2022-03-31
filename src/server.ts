import { Server } from 'http'
import express from 'express'

const application = express()

const server = new Server(application)

server.listen(Number(process.env.PORT), () => {
	console.log('Up')
})
