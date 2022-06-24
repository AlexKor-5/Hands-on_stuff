import React from 'react'
import { Blocks } from './components/Blocks/Blocks'
import './scss/normalize.scss'
import './scss/root.scss'
import { Cube } from './components/Cube/Cube'
import { Link } from './components/Link/Link'
import { Users } from './components/Users/Users'

export function App() {
    return (
        <>
            {/*<Blocks />*/}
            {/*<Link>Some link!</Link>*/}
            {/*<Cube />*/}
            <Users />
        </>
    )
}

export default App
