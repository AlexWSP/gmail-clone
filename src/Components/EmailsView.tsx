import React from 'react'
import styled from 'styled-components'
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import { IconButton } from '@material-ui/core';
import InboxRoundedIcon from '@material-ui/icons/InboxRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import EmailItem from './emailitem/EmailItem';

interface Email {
    starred: boolean;
    from: String;
    subject: String;
    message: String;
    received: String;
    read: boolean;
}

const EmailsView = ({ emailList } : {emailList: Email[]}) => {
    return (
        <>
        <WrapperMobile>
            <EmailsContainer>
                {
                    emailList.map(({starred, from, subject, message, received, read} : Email) => (
                        <EmailItem
                            starred={starred}
                            from={from}
                            subject={subject}
                            message={message}
                            received={received}
                            read={read}
                        />
                    ))
                }
            </EmailsContainer>

            <BottomWrapperMobile>
                <BottomWrapperMobile2>
                    <EmailRoundedIcon />
                    <VideocamOutlinedIcon />
                </BottomWrapperMobile2>
            </BottomWrapperMobile>

            <ComposeWrapper>
                <IconButton>
                    <CreateOutlinedIcon />
                </IconButton>
            </ComposeWrapper>
        </WrapperMobile>

        <Wrapper>
            <TopWrapper>
                <IconButton>
                    <CheckBoxOutlineBlankRoundedIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreRoundedIcon />
                </IconButton>
                
                <IconButton>
                    <RefreshRoundedIcon />
                </IconButton>

                <IconButton>
                    <MoreVertRoundedIcon />
                </IconButton>
            </TopWrapper>

            <MiddleWrapper>
                
                    <MiddleWrapperSelected>
                        <InboxRoundedIcon /> 
                        Primary
                    </MiddleWrapperSelected>
                

                <MiddleWrapper2>
                    <PeopleRoundedIcon />
                    Social
                </MiddleWrapper2>

                <MiddleWrapper2>
                    <LocalOfferRoundedIcon />
                    Promotions
                </MiddleWrapper2>
            </MiddleWrapper>

            <EmailsContainer>
                {
                    emailList.map(({starred, from, subject, message, received, read} : Email) => (
                        <EmailItem
                            starred={starred}
                            from={from}
                            subject={subject}
                            message={message}
                            received={received}
                            read={read}
                        />
                    ))
                }
            </EmailsContainer>
        </Wrapper>
        </>
    )
}

export default EmailsView

const WrapperMobile = styled.div`
    display: grid;
    grid-template-rows: calc(100vh - 100px) auto;
    overflow: hidden;

    @media screen and (min-width: 900px) {
        display: none;
    }
`

const Wrapper = styled.div`
    height: calc(100vh - 55px);
    overflow: scroll;
    overflow-x: hidden;
    @media screen and (max-width: 900px) {
        display: none;
    }
`

const TopWrapper = styled.div`
    padding-left: 17px;
    height: 48px;
    border-bottom: 2px solid whitesmoke;

    @media screen and (max-width: 900px) {
        display: none;
    }
`

const MiddleWrapper = styled.div`
    height: 48px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .MuiSvgIcon-root {
        color: #5f6368;
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
`

const MiddleWrapper2 = styled.div`
    display: flex;
    align-items: center;
    padding-left: 28px;
    :hover {
        background-color: whitesmoke;
        border-width: 3px;
    }
    .MuiSvgIcon-root {
        padding-right: 15px;
    }
`

const MiddleWrapperSelected = styled.div`
    display: flex;
    align-items: center;
    padding-left: 28px;
    color: red;
    border-bottom: 3px solid red;
    :hover {
        background-color: whitesmoke;
        border-width: 3px;
    }
    .MuiSvgIcon-root {
        padding-right: 15px;
        color: red;
    }
`

const EmailsContainer = styled.div`
    @media screen and (max-width: 900px) {
        overflow: scroll;
        overflow-x: hidden;
    }
`

const BottomWrapperMobile = styled.div`
    display: grid;
    align-items: end;

    align-content: end;

    .MuiSvgIcon-root {
        color: #5f6368;
        font-size: 2.5em;
        cursor: pointer;
    }

    @media screen and (min-width: 900px) {
        display: none;
    }
`
const BottomWrapperMobile2 = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const ComposeWrapper = styled.div`
    position: fixed;
    top: 80vh; 
    left: 80vw;

    .MuiSvgIcon-root {
        font-size: 2em;
        background-color: white;
        border-radius: 50%;
        box-shadow: 0px 2px 5px -2px black;
        padding: 5px;
    }
`