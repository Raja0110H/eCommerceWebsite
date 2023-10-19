import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
    height: 30px;
    max-width: 900px;
    min-width: 100px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-left:-5px;
    margin-right: -35px
`

export const LogoContainer = styled(Link)`
    height: 150%;
    max-width: 950px;
    display: flex;
    &:hover {
   transform: scale(1.2);
   transition: transform 200ms; 
   color:purple;  
  
   
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 200ms;
    color: purple;
  }
`;

