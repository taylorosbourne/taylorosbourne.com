import styled from 'styled-components';

const PostBody = styled.div`
  font-weight: 300;
  a {
    text-decoration: none;
    color: #d33682;
    font-weight: bold;
    font-family: Arial;
    :hover {
      border-bottom: 3px #dc322f dashed;
    }
  }
`;

export { PostBody };
