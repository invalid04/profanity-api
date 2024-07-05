import { Hono } from "hono";
import { env } from "hono/adapter";
import { cors } from "hono/cors";

import { Index } from "@upstash/vector";

const app = new Hono()

type Environment = {
    VECTOR_URL: string 
    VECTOR_TOKEN: string
}

app.use(cors())

app.post('/', async (c) => {
    if (c.req.header('Content-Type') !== 'application/json') {
        return c.json({ error: 'JSON body expected' }, { status: 406 })
    }

    try {
        const { VECTOR_TOKEN, VECTOR_URL} = env<Environment>(c)

        const index = new Index({
            url: VECTOR_URL,
            token: VECTOR_TOKEN,
            cache: false,
        })

        const body = await c.req.json()
        let { message } = body as {message: string}

        if (!message) {
            return c.json({error: "message is required"}, { status: 400 })
        }

        if (message.length > 1000) {
            return c.json({error: "Message is too long"}, { status: 413 })
        }

        

    } catch (err) {

    }
})