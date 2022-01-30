import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, addChatToDatabase, removeChat, removeChatfromFirebase, subscribeChatsChangings } from '../Actions/Chats';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { List, ListItem } from '@mui/material';


export default function FormDialog() {

    const { chatId } = useParams()

    const dispatch = useDispatch()
    const chats = useSelector((state) => state.Chats)


    React.useEffect(()=>{
        dispatch(subscribeChatsChangings())
    }, [])


    const [newChatName, setNewChatName] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (e) => setNewChatName(e.target.value);

    const onAddChat = () => {
        dispatch(addChatToDatabase(`chats${Date.now()}`, newChatName));
        setNewChatName("");
        handleClose();
    };

    const handleRemoveChat = (chatId) => dispatch(removeChatfromFirebase(chatId))


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Добавить новый чат
            </Button>

            <List>
                {Object.values(chats).map((chat) => {

                    return <div key={chat.id} style={{ display: 'flex' }} >
                        <ListItem button>
                            <Link to={`/chats/${chat.id}`}>
                                <b >
                                    {chat.name}
                                </b>
                            </Link>

                        </ListItem>
                        <Button
                            onClick={() => {
                                handleRemoveChat(chat.id)
                            }} >
                            Удалить
                        </Button>
                    </div>
                })}
            </List>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ведите название нового чата
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Название чата"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={newChatName} onChange={handleChange}

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={onAddChat} disabled={!newChatName}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}