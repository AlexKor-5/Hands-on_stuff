import { rest } from 'msw'
import { generateUsers } from '../services/generateUsers/generateUsers'

export const handlers = [
    rest.get('/users', (req, res, ctx) => {
        //return res(ctx.delay(1000), ctx.status(200), ctx.json(generateUsers(5)))
        // return res(ctx.delay(1000), ctx.status(404), ctx.json(null))
        return res(ctx.delay(1000), ctx.status(404))
    }),
]
