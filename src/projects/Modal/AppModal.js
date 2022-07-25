import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'
import { Modal } from './components/Modal'

export const AppModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = (setIsOpen) => {
        setIsOpen(true)
    }
    const closeModal = (setIsOpen) => {
        setIsOpen(false)
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => closeModal(setIsOpen)}>
                <div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ducimus eius
                        inventore, modi nisi reprehenderit veritatis vitae voluptatum? Saepe, voluptate.
                    </span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, blanditiis.</p>
                    <button onClick={() => closeModal(setIsOpen)}>Close Modal</button>
                </div>
            </Modal>
            <button onClick={() => openModal(setIsOpen)}>Open Modal</button>
        </>
    )
}
