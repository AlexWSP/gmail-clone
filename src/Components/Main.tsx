import React from 'react'
import styled from 'styled-components'
import EmailListContainer from '../containers/EmailListContainer'
import Sidebar from './Sidebar'
import SideIcons from './SideIcons'

export default function Main() {
    return (
        <Wrapper>
            <Sidebar />
            <EmailListContainer />
            <SideIcons />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 270px auto 50px;
    max-width: 100vw;

    @media screen and (max-width: 900px) {
        display: flex;
    }

    @media screen and (min-width: 900px) {
    }
`