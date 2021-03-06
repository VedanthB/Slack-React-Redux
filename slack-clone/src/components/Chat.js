import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { selectRoomId } from '../features/appSlice';
import { useSelector } from 'react-redux';
import ChatInput from './ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Message from './Message';
import Spinner from 'react-spinkit'



function Chat() {
    const chatRef = useRef(null)
    const roomId = useSelector(selectRoomId)

    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    );

    const [roomMessages,  loading] = useCollection(
        roomId && 
          db 
           .collection('rooms')
           .doc(roomId)
           .collection('messages')
           .orderBy('timestamp', 'asc')
    );
     
 // for the scroll down effect when we send messages  

 useEffect(() => {
    chatRef?.current?.scrollIntoView({
        behaviour: 'smooth',
    });
    }, [roomId, loading]) // roomId because it should load when the component mounts, here it is the room chat


    if (loading) {
        return (
            <ChatLoading>
                <ChatLoadingContents>
                   <Spinner name="ball-scale-ripple-multiple" color='purple' fadeIn='none' />
                </ChatLoadingContents>
            </ChatLoading>
        )
    }
   
    console.log(roomDetails?.data())
    console.log(roomMessages)

    return (
       
            <ChatContainer  >

                {roomDetails && roomMessages && (
                         <>
                         <Header>
                             <HeaderLeft>
                                 <h4>
                                  <strong> #{roomDetails?.data().name} </strong>                          
                                 </h4>
                                 <StarBorderIcon />
                             </HeaderLeft>
             
                            
                             <HeaderRight>
                                 <p>
                                     <InfoOutlinedIcon /> Details
                                 </p>
                             </HeaderRight>
             
                         </Header>
             
                           <ChatMesssages>
                                 {roomMessages?.docs.map(doc => {
                                     const { message, timestamp, user, userImage } = doc.data()
             
                                     return (
                                         <Message 
                                          key= {doc.id}
                                          message={ message }
                                          timestamp={ timestamp }
                                          user = { user }
                                          userImage={ userImage }
                                         />
                                     )
                                 })}
             
                                 <ChatBottom ref={chatRef} />
                           </ChatMesssages>
                           
             
                          <ChatInput chatRef={chatRef} channelName={roomDetails?.data().name} channelId={roomId} />
                          </>
                    )}
       
        </ChatContainer>
        
    )
}

export default Chat

const ChatLoading = styled.div `
  display: grid;
  place-items: center;
  width: 100%;
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
  background-color: lightgrey;
  color: white;
`

const ChatLoadingContents = styled.div `
  padding:100px;
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


const ChatBottom = styled.div `
 padding: 200px;
`;

const Header = styled.div `
  display : flex;
  justify-content : space-between;
  padding: 20px;
  border-bottom: 1px solid lightgrey;
`;

const ChatMesssages = styled.div ` `;

const HeaderLeft = styled.div `
  display : flex;
  align-items : center;

  > h4 {
      display: flex;
      text-transform: lowercase;
      margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
      margin-left: 10px;
      font-size: 18px;
  }
`;

const HeaderRight = styled.div `
  > p {
      display: flex;
      align-items : center;
      font-size: 14px;
  }

  > p .MuiSvgIcon-root {
      margin-right: 5px !important;
      font-size: 16px;
  }
`

const ChatContainer = styled.div `
 flex: 0.7;
 flex-grow: 1;
 overflow-y: scroll;
 margin-top: 60px;
 background-color: #2c2f33;
 color: white;

`
