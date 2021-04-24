import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';


function ChatInput({ channelid , channelName }) {
    const sendMessage = (e) => {
        e.preventDefault() ;
        
    }
    

    return (
        <ChatInputContainer>
            <form action='' >
                <input placeholder={`Message #Room`} />

                <Button type='submit' hidden onClick={sendMessage} >
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