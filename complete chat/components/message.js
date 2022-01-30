import { Alert } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

function Message(props) {
    const { nick = Date.now()} = props

    return (

        <p className='Setmessagelist' severity="success" id={nick} > {props.author}: {props.text}   </p >

    )
}

Message.propTypes = {
    nick: PropTypes.string,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
Message.defaultProps = {}

export default Message