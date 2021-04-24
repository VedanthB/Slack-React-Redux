import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { db } from '../firebase';
import firebase from 'firebase'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';


function ChatInput({ channelId , channelName }) {
    const [input, setInput] = useState('')

    const sendMessage = (e) => {
        e.preventDefault() ;
        
        if (!channelId) {
            return false  // exit the function if we dont have channel id
        }

      // adds to db in rooms 
        db.collection('rooms').doc(channelId).collection('messages').add({
            message:  input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Supertramp',
            userImage: 'https://png.pngtree.com/png-clipart/20191120/original/pngtree-pink-watercolor-brushes-png-image_5054156.jpg',
        })

        setInput('')
    }


    return (
        <ChatInputContainer>
            <form >
                <input onChange={(e) => setInput(e.target.value)} value={input} placeholder={`Message #Room`} />

                <Button  type='submit' hidden onClick={sendMessage} >
                    send
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div `
  border-radius: 20px;

  > form {
      position: relative;
      display: flex;
      justify-content: center;
  }

  > form > input {
          position: fixed;
          bottom: 30px;
          width: 60%;
          border: 1px solid grey;
          padding: 20px;
          border-radius: 3px;
          outline: none;
      }

      > form > button {
          display: none !important;
      }
` 