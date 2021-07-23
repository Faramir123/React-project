import react from 'react';

function Message(props) {

    return <p>{props.author}{props.text}{props.index}</p>
}

export default Message