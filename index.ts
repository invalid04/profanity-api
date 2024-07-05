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

        
    } catch (err) {

    }
})