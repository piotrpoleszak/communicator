import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie/es6';

import { ChannelListContainer, ChannelContainer, Auth } from './components';

import './App.css'

const apiKey = 'u438xjwucaf9';

const client = StreamChat.getInstance(apiKey)

const authToken = false;

export const App = () => {

    if(!authToken) return <Auth />
    
    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team dark">
                <ChannelListContainer 

                />
                <ChannelContainer 

                />
            </Chat>
        </div>
    );
}

export default App;
