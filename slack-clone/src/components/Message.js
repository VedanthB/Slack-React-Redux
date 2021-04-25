import styled from 'styled-components'
import React from 'react'

function Message({message, timestamp, user, userImage}) {
    return (
        <MessageContainer>
            <img src={userImage} alt='profile-pic' />
            <MessageInfo>
                <h3>
                    {user}<span> {new Date(timestamp?.toDate()).toUTCString( )}  </span> 
                    {/* the code here converts firestore timestamp to local timestamp  */}
                </h3>
                <p> {message} </p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message

const MessageContainer = styled.div `
 display : flex;
 align-items :center;
 padding: 20px;

 > img {
     height: 50px;
     border-radius: 40px;
 }
`

const MessageInfo = styled.div `
 padding-left: 10px;
  
> h3 {
    color:  #e690e8; 

}
 
 > h3 > span {
     color: whitesmoke;
     font-weight: 300;
     margin-left: 4px;
     font-size: 14px;
 }

 > p {
     font-weight: 600;
     color: white;
 }
`;
