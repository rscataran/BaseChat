import React, { useState } from 'react';
import { socket } from '../sockets/BaseChat.socket';

export function ChatForm() {
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        const message = value
        socket.timeout(500).emit('message', message, () => {
            setIsLoading(false);
            setValue("")
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <input onChange={e => setValue(e.target.value)} />

            <button type="submit" disabled={isLoading}>Submit</button>
        </form>
    );
}