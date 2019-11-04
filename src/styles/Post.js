import styled from 'styled-components';

const PostBody = styled.div`
  a {
    text-decoration: none;
    color: #173449;
    font-weight: bold;
    font-family: Arial;
    position: relative;
    :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #173449;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
    }
    :hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1); 
  }
}
`

export { PostBody }