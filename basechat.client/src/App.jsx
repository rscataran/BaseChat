import React, { useState, useEffect } from 'react';
import { socket } from './sockets/BaseChat.socket';
import { ConnectionState } from './components/ConnectionState';
import { ConnectionManager } from './components/ConnectionManager';
import { Events } from "./components/Events";
import { ChatForm } from './components/ChatForm';

export default function App() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [messageEvents, setMesssageEvents] = useState([]);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        function onMessageEvent(value) {
            setMesssageEvents(previous => [...previous, value]);
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('message', onMessageEvent);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('message', onMessageEvent);
        };
    }, []);

    return (
        <div className="App">
            <ConnectionState isConnected={isConnected} />
            <ConnectionManager />
            <ChatForm />
            <Events events={messageEvents} />
        </div>
    );
}