import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function Header() {
    return (
      <HeaderContainer>
          {/* Header left  */}
          <HeaderLeft>
             <HeaderAvatar 
               // TODO: Add onClick
              />
              <AccessTimeIcon />
          </HeaderLeft>
          {/* Header search  */}

          {/* header right */}
      </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div `
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  background-color : var(--slack-color);
  padding :10px 0 ;
  justify-content: space-between;
  color:  white;
`;
 
const HeaderLeft = styled.div `
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left : 30px;

  > .MuiSvgIcon-root {
    margin-left: auto; 
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar) `
   cursor: pointer;

   :hover {
     opacity: 0.8;
   }
` ;