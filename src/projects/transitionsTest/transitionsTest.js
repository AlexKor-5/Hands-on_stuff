import React, { useState } from 'react'
import { v4 as createId } from 'uuid'
import styles from './TransitionsTest.module.scss'
import PropTypes from 'prop-types'
import { faker } from '@faker-js/faker'
import FlipMove from 'react-flip-move'

const ITEMS = [
    { id: createId(), name: 'one' },
    { id: createId(), name: 'two' },
]

export const TransitionsTest = () => {
    const [items, setItems] = useState(ITEMS)

    const add = (setItems) => {
        const newItem = { id: createId(), name: faker.animal.bird() }
        setItems((prev) => [newItem, ...prev])
    }

    const remove = (id) => {
        setItems((prev) => prev.filter((elem) => elem.id !== id))
    }

    return (
        <>
            <DisplayItems items={items} onDelete={remove} />
            <button
                onClick={() => {
                    add(setItems)
                }}
            >
                Add
            </button>
        </>
    )
}

const DisplayItems = ({ items = [], onDelete = (f) => f }) => {
    return (
        <FlipMove>
            {items.map((elem) => {
                return (
                    <div key={elem.id} className={styles.item}>
                        <span> {elem.name}</span>
                        <button onClick={() => onDelete(elem.id)}>X</button>
                    </div>
                )
            })}
        </FlipMove>
    )
}

DisplayItems.propTypes = {
    items: PropTypes.array,
    onDelete: PropTypes.func.isRequired,
}
