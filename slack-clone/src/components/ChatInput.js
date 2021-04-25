import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { auth, db } from '../firebase';
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth';



function ChatInput({ channelId , channelName, chatRef }) {
    const [user] = useAuthState(auth)
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
            user: user.displayName,
            userImage: user.photoURL,
        })

        setInput('')

        chatRef.current.scrollIntoView({
            behaviour: 'smooth',
        })
    }


    return (
        <ChatInputContainer>
            <form >
                <input  onChange={(e) => setInput(e.target.value)} value={input} placeholder={`Message #${channelName}`} />

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