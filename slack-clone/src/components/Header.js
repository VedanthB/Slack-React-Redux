import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';


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

          <HeaderSearch>
             <SearchIcon />
             <input placeholder="Search Slack Clone" />
          </HeaderSearch>

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

const HeaderSearch = styled.div `
  flex: 0.4 ;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: grey;
  border: 1px grey solid ;

  > input {
    background-color : transparent;
    border: none ;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color : white;
  }
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