import styled from 'styled-components';

export const BotaoSubmit = styled('button')`

`

export const InputSubmit = styled.input.attrs(props => ({
    type: 'submit',
    })
    )`
    border-radius: 3px;
    border: 1px solid palevioletred;
    display: block;
    margin: 0 0 1em;    
    width: 666px;
    height: 60px;
    background-color: #F1F4F4;
    color: #90A5A8;
    font-size: 18px;
    border: none;
    border-radius: 5px;`
    
    