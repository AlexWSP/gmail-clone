import React from 'react'
import styled from 'styled-components';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const Compose = () => {
    return (
        <Wrapper>
            <AddRoundedIcon fontSize='large' />
            <p>Compose</p>
        </Wrapper>
    )
}

export default Compose

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 35% auto;
    width: auto;
    padding: 6px 32px 6px 8px;
    margin-top: 15px;
    margin-left: 10px;
    margin-bottom: 15px;
    border-radius: 30px;
    background-color: white;
    cursor: pointer;
    outline: none;
    border: none;
    box-shadow: 0px 2px 5px -2px black;

    :hover {
        box-shadow: 0 1px 3px 0 whitesmoke;
        background-color: #fafafb;
    }
`