import React from 'react'
import styles from './users.module.scss'
import { Fetch } from '../Fetch/Fetch'

export const Users = () => {
    return (
        <Fetch
            url={'/users'}
            renderSuccess={(f) => f}
            renderLoading={<h1>Loading...</h1>}
            renderError={Error}
        />
    )
}
const User = (usersArr = []) => {
    return usersArr.map((user) => {
        return (
            <div className={styles.block} key={user.id}>
                <span>
                    <b>name</b>: {user.name}
                </span>
                <span>
                    <b>jobTitle</b>: {user.jobTitle}
                </span>
                <span>
                    <b>city</b>: {user.city}
                </span>
                <span>
                    <b>street</b>: {user.street}
                </span>
            </div>
        )
    })
}
const Error = (error) => (
    <div className={styles.errorBlock}>
        <h3>Error</h3>
        <span>{error.message}</span>
    </div>
)
