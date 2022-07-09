import React from 'react'
import st from './FlexPage.module.scss'
import classNames from 'classnames'

export const FlexPage = () => {
    return (
        <>
            <div className={st.wrapper}>
                <header>
                    <h1>Name</h1>
                    <nav>
                        <div>
                            <a href="#" className={classNames(st.navLink)}>
                                One
                            </a>
                            <a href="#" className={classNames(st.navLink)}>
                                Two
                            </a>
                            <a href="#" className={classNames(st.navLink)}>
                                Three
                            </a>
                            <a href="#" className={classNames(st.navLink)}>
                                Four
                            </a>
                        </div>
                        <div>
                            <a href="#" className={classNames(st.navLink)}>
                                Last
                            </a>
                        </div>
                    </nav>
                </header>
            </div>

            <div className={st.wrapper}>
                <main>
                    <section className={st.content}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Necessitatibus, sit!
                        </p>
                    </section>

                    <aside className={st.aside}>
                        <div>Form</div>
                        <div>Price</div>
                    </aside>
                </main>
            </div>
        </>
    )
}
