import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    const buttonStyle = {
        maxWidth: '38px',
        maxHeight: '38px',
        minWidth: '38px',
        minHeight: '38px',
    }

    return <div>
        <TextField
            size="small"
            id="outlined-basic"
            label={error ? "Title is required" : 'Please type here...'}
            variant="outlined"
            value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            error={!!error}

        />
        {/*<button onClick={addItem}>+</button>*/}
        <Button variant="contained" size="small" onClick={addItem} style={buttonStyle}>+</Button>

        {/*{error && <div className="error-message">{error}</div>}*/}
    </div>
}
