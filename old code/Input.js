import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = (props) => {

    const [inputValue, setInputValue] = React.useState('');
    const { onSubmit } = props;
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (onSubmit) {
            onSubmit(inputValue);
            setInputValue('');
        }
    }

    return (
        <form className="app__form bordered" onSubmit={handleSubmit}>

            <TextField
                fullWidth
                required
                className="bordered"
                autoFocus
                placeholder="Введите сообщение"
                value={inputValue}
                onChange={handleChange}
            />
            <button className="App-button">Отправить</button>
        </form>
    )
}

export default Input
