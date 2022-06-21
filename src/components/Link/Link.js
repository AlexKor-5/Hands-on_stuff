import React, { useState } from 'react'
import styles from './link.module.scss'

const STATUS = {
    HOVERED: styles.hovered,
    NORMAL: styles.normal,
}

export const Link = ({ page, children }) => {
    const [status, setStatus] = useState(STATUS.NORMAL)

    const onMouseEnter = () => {
        setStatus(STATUS.HOVERED)
    }

    const onMouseLeave = () => {
        setStatus(STATUS.NORMAL)
    }

    return (
        <a
            className={status}
            href={page || '#'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </a>
    )
}
