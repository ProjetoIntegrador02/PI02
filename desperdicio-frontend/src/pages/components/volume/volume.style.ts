import styled from 'styled-components';



export const VolumeItens = styled.ul`
  list-style: none;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 50px;

  li {
    display: flex;
    padding: 16px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 10px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  }
`