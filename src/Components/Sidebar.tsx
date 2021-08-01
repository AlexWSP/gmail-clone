import React from 'react'
import styled from 'styled-components'
import Compose from './buttons/Compose'
import { sidebarButtonItems } from './data/SidebarButtonItems'
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import KeyboardRoundedIcon from '@material-ui/icons/KeyboardRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { bottomIcons } from './data/BottomIconsData';

const Sidebar = () => {
    return (
        <Wrapper>
            <ComposeWrapper>
                <Compose />
            </ComposeWrapper>

            <SideButtonsWrapper>
                {
                    sidebarButtonItems.map(item => (
                        <SidebarButtonItem>{item.icon} {item.text}</SidebarButtonItem>
                    ))
                }
            </SideButtonsWrapper>

            <SidebarSectionWrapper>
                <Title>Meet</Title>
                <SidebarButtonItem><VideocamRoundedIcon /> New Meeting</SidebarButtonItem>
                <SidebarButtonItem><KeyboardRoundedIcon /> Join Meeting</SidebarButtonItem>
            </SidebarSectionWrapper>

            <SidebarSectionWrapper>
                <Title>Hangouts</Title>
                <SidebarButtonItem><AccountCircleRoundedIcon /> Friend A</SidebarButtonItem>
            </SidebarSectionWrapper>

            <SidebarSectionWrapper>
                <BottomIconsWrapper>
                    {
                        bottomIcons.map(item => (
                            <>
                                {item}
                            </>
                        ))
                    }
                </BottomIconsWrapper>
            </SidebarSectionWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    border-right: 2px solid whitesmoke;
    display: grid;
    grid-template-rows: repeat(4, min-content) auto;

    @media screen and (max-width: 900px) {
        display: none;
    }
`

const ComposeWrapper = styled.div`
    display: grid;
    place-items: start;
`
const SideButtonsWrapper = styled.div``
const SidebarButtonItem = styled.div`
    display: grid;
    justify-items: start;
    grid-template-columns: 20% auto;
    color: gray;
    padding: 5px 25px;
    border-radius: 0 100px 100px 0;
    cursor: pointer;
    margin-right: 8px;

    :hover{
        background-color: whitesmoke;
        color: black;
    }
`
const SidebarSectionWrapper = styled.div`
    border-top: 2px solid whitesmoke;

    display: grid;
    align-items: end;
`
const Title = styled.h4`
    padding-left: 25px;
    justify-items: start;
    margin-bottom : 4px;
    margin-top: 8px;
`
const BottomIconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    color: gray;
    border-top: 2px solid whitesmoke;
    .MuiSvgIcon-root {
        padding: 2px;
        cursor: pointer;
    }
`