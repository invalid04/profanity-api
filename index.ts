import { Hono } from "hono";
import { env } from "hono/adapter";
import { cors } from "hono/cors";

const app = new Hono()

app.use(cors())

app.post('/', async (c) => {
    if (c.req.header('Content-Type') !== 'application/json') {
        return c.json({ error: 'JSON body expected' }, { status: 406 })
    }

    try {
        const {} = env(c)
    } catch (err) {

    }
})