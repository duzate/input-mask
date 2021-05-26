import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  
  span {
    padding: 4px 8px;
    font-size: 14px;
    color: #555;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    
  }

  input {
    flex: 1;
    outline: 0;
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 0 4px 4px 0;
    border-left: 0;
  }

  & + div {
    margin-top: 10px;
  }
`;
