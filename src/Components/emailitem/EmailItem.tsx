import React, { useState } from 'react'
import styled from 'styled-components'
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import { IconButton } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

interface Email {
    starred: boolean;
    from: String;
    subject: String;
    message: String;
    received: String;
    read: boolean;
}

const EmailItem = ({starred, from, subject, message, received, read}: Email) => {
    const [star, setStar] = useState(starred);

    return (
        <>
        <WrapperMobile>
            <LeftWrapper>
                <AccountCircleIcon />
            </LeftWrapper>
            
            <MidWrapper>
                <div className={read ? 'read' : 'unread'}>{from}</div>
                <div className={read ? 'read' : 'unread'}>{subject}</div>
                <span>{message}</span>
            </MidWrapper>

            <RightWrapper>
                <p className={read ? 'read' : 'unread'}>{received}</p>
                <IconButton onClick={() => setStar(!star)}>
                {
                    star ? <StarRoundedIcon htmlColor='#f7cb69' /> : <StarBorderRoundedIcon />    
                }
                </IconButton>
            </RightWrapper>
        </WrapperMobile>

        <WrapperTablet>
            <LeftWrapper>
                <Checkbox />
            </LeftWrapper>
            
            <MidWrapper>
                <div className={read ? 'read' : 'unread'}>{from}</div>
                <div className={read ? 'read' : 'unread'}>{subject}</div>
                <span>{message}</span>
            </MidWrapper>

            <RightWrapper>
                <p className={read ? 'read' : 'unread'}>{received}</p>
                <IconButton onClick={() => setStar(!star)}>
                {
                    star ? <StarRoundedIcon htmlColor='#f7cb69' /> : <StarBorderRoundedIcon />    
                }
                </IconButton>
            </RightWrapper>
        </WrapperTablet>

        <Wrapper>
            <Checkbox />
            <IconButton onClick={() => setStar(!star)}>
                {
                    star ? <StarRoundedIcon htmlColor='#f7cb69' /> : <StarBorderRoundedIcon />    
                }
            </IconButton>

            <p className = {read ? 'read' : 'unread'}>{from}</p>

            <div>
                <p className={read ? 'read' : 'unread'}>{subject}</p> - <span>{message}</span>
            </div>

            <p className={read ? 'read' : 'unread'}>{received}</p>
        </Wrapper>
        </>
    )
}

export default EmailItem

const WrapperMobile = styled.div`
    display: grid;
    grid-template-columns: 15% auto 12%;
    grid-auto-rows: 100px;

    .unread {
        color: black;
        font-weight: bolder;
    }

    .read {
        color: gray;
    }

    @media screen and (min-width: 900px) {
        display: none;
    }
}
`

const LeftWrapper = styled.div`
    display: grid;
    justify-content: center;

    .MuiSvgIcon-root {
        color: #5f6368;
        font-size: 2.5em;
        @media screen and (min-width: 900px) and (max-width: 1200px) {
            font-size: 1em;
        }
    }
`

const MidWrapper = styled.div`
    display: grid;
    grid-auto-rows: 20px 20px auto;

    div {
        font-weight: bold;
    }

    span {
        color: darkgray;
        display: block;
        text-overflow: ellipsis;
        word-wrap: break-word;
        overflow: hidden;
        max-height: 2.6em;
        line-height: 1.3em;
    }
`

const RightWrapper = styled.div`
    display: grid;
    grid-template-rows: 20px auto;
    justify-content: center;

    button {
        display: flex;
        max-height: 2em;
        max-width: 2em;
        margin-top 20px;
    }
`

const WrapperTablet = styled.div`
    display: grid;
    grid-template-columns: 10% auto 10%;
    grid-auto-rows: 100px;

    .unread {
        color: black;
        font-weight: bolder;
    }

    .read {
        color: gray;
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
    @media screen and (min-width: 1200px) {
        display: none;
    }
`

const Wrapper = styled.div`
    padding-left: 20px;
    border-top: 2px solid whitesmoke;
    display: grid;
    grid-template-columns: min-content min-content 120px auto min-content;
    align-items: center;
    cursor: pointer;
    padding-right: 20px;

    div {
        display: flex;
        align-items: center;

        span {
            color: darkgray;
            display: block;
            text-overflow: ellipsis;
            word-wrap: break-word;
            overflow: hidden;
            max-height: 3.6em;
            line-height: 1.8em;
        }
    }

    .unread {
        color: black;
        font-weight: bolder;
    }

    .read {
        color: gray;
    }

    :hover {
        border-top: 1px solid whitesmoke;
        box-shadow: 0 4px 4px -2px gray;
    }

    @media screen and (max-width: 1200px) {
        display: none;
    }
`