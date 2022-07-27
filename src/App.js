import React from 'react'
import { Blocks } from './components/Blocks/Blocks'
import './scss/normalize.scss'
import './scss/root.scss'
import { Cube } from './components/Cube/Cube'
import { Link } from './components/Link/Link'
import { Users } from './components/Users/Users'
import { FlexBoxes } from './components/FlexBoxes/FlexBoxes'
import { FlexPage } from './components/FlexPage/FlexPage'
import { MultiStepApp } from './projects/MultiStepForm/MultiStepApp'
import { TransitionsTest } from './projects/transitionsTest/transitionsTest'
import { AppModal } from './projects/Modal/AppModal'
import { TransitionComp } from './projects/TransitionComp/TransitionComp'
import { AppPagination } from './projects/AppPagination/AppPagination'

export function App() {
    return (
        <>
            {/*<Blocks />*/}
            {/*<Link>Some link!</Link>*/}
            {/*<Cube />*/}
            {/*<Users />*/}
            {/*<FlexBoxes />*/}
            {/*<FlexPage />*/}
            {/*<MultiStepApp />*/}
            {/*<TransitionsTest />*/}
            {/*Modal Window---------------------------------------*/}
            <AppModal />
            {/*<TransitionComp />*/}
            {/* // Modal Window---------------------------------------*/}
            {/*<AppPagination />*/}
        </>
    )
}

export default App
