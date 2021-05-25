import React, { Fragment, useEffect, useState } from 'react'
import './ScrollUp.scss'

const ScrollUp = props => {
    const [visible, setVisible] = useState(false)

    function scrollUp() {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
    }
    const listener = () => {
        if(window.scrollY >= 800) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listener)

        return () => {
            window.removeEventListener('scroll', listener)
        }
    }, [])
    return (
        <Fragment>
            <div onClick={scrollUp} className={visible ? 'scrollup active' : 'scrollup'}/>
            {props.children}
        </Fragment>
    )
}

export default ScrollUp