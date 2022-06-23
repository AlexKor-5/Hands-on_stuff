import { rest } from 'msw'
import { generateUsers } from '../services/generateUsers/generateUsers'

export const handlers = [
    rest.get('/users', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(generateUsers(10)))
    }),
]
