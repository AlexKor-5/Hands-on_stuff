import React from 'react'
import styles from './blocks.module.scss'
import { TextBlock } from './TextBlock/TextBlock'

export const Blocks = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <span className={styles.title}>Blocks</span>
            </div>
            <TextBlock />
        </>
    )
}
