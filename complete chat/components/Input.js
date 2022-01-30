import React from "react";
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'

export const Input = (props) => {

    const { onSubmit } = props

    const [inputValue, setInputValue] = React.useState('')

    const handleMessageChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleMessageSubmit = (e) => {
        e.preventDefault()

        if (onSubmit) {

            onSubmit(inputValue)

            setInputValue('')
        }

    }

    return (
        <div className="Input">
            <form className="app__form bordered" onSubmit={handleMessageSubmit}>
                <TextField
                    fullWidth
                    required
                    autoFocus
                    className="child__text-field bordered"
                    variant="outlined"
                    label="Сообщение"
                    placeholder="Введите сообщение"
                    value={inputValue}
                    onChange={handleMessageChange}
                />
                <Button type="submit" variant="contained">
                    Отправить
                </Button>
            </form>
        </div>

    )
}