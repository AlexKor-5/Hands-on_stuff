import React from 'react'
import styles from './textBlock.module.scss'
import classnames from 'classnames'

export const TextBlock = () => {
    return (
        <>
            <div className={classnames(styles.textBlock)}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>

                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
                    impedit laborum modi quas, totam ut veritatis vero voluptates. Beatae,
                    commodi consequatur delectus deleniti dolor facere id illum impedit ipsam
                    iste minima molestias natus nobis nostrum, possimus praesentium quae
                    quibusdam ratione reprehenderit rerum sapiente soluta suscipit voluptatem
                    voluptates voluptatum. Alias assumenda cumque dolore dolorem ducimus
                    eaque earum eos esse est eum ex fugit harum iste, iure labore maiores
                    maxime, minima nam neque nostrum perferendis praesentium quaerat
                    reiciendis sed sit suscipit ut. Alias corporis laboriosam minus nemo
                    neque numquam optio possimus quis quo, saepe? At exercitationem labore
                    totam? Animi cumque dolor earum in iste, iusto labore laborum magni minus
                    nam, necessitatibus omnis, quae quam quidem quis rem sapiente soluta
                    totam veniam voluptate. Asperiores ducimus exercitationem explicabo in
                    ipsa laudantium magnam repellat reprehenderit saepe voluptatibus.
                    Assumenda dignissimos distinctio id officia reprehenderit? A animi
                    aperiam architecto cumque debitis dicta officiis provident rerum tempora
                    voluptate.
                </p>
            </div>
        </>
    )
}
