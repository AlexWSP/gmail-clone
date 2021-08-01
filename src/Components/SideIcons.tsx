import React from 'react'
import styled from 'styled-components'

import AddRoundedIcon from '@material-ui/icons/AddRounded';

const SideIcons = () => {
    return (
        <Wrapper>
            <img src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" alt="calendar" />
            <img src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" alt="keep" />
            <img src="https://www.gstatic.com/companion/icon_assets/tasks2_2x.png" alt="tasks" />
            <img src="https://www.gstatic.com/companion/icon_assets/contacts_2x.png" alt="contacts" />
            <hr />
            <AddRoundedIcon />
        </Wrapper>
    )
}

export default SideIcons

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 50px) 1px 50px;
    place-items: center;
    border-left: 2px solid whitesmoke;

    img {
        width: 100%;
        max-height: 22px;
        object-fit: contain;
        cursor: pointer;
    }

    hr {
        width: 60%
    }

    .MuiSvgIcon-root {
        cursor: pointer;
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
`