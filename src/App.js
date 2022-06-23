import React from 'react'
import { Blocks } from './components/Blocks/Blocks'
import './scss/normalize.scss'
import './scss/root.scss'
import { Cube } from './components/Cube/Cube'
import { Link } from './components/Link/Link'
import { Fetch } from './components/Fetch/Fetch'

export function App() {
    return (
        <>
            {/*<Blocks />*/}
            {/*<Link>Some link!</Link>*/}
            {/*<Cube />*/}
            <Fetch />
        </>
    )
}

export default App
