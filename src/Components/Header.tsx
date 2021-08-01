import React from 'react'
import styled from 'styled-components'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SearchIcon from '@material-ui/icons/Search';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

function Header() {
    return (
        <Wrapper>
            <LogoWrapper>
                <Menu>
                    <MenuRoundedIcon />
                </Menu>
                <GmailLogo>
                <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png' alt="gmail logo"/>
                </GmailLogo>
            </LogoWrapper>

            <SearchWrapper>
                <SearchBarWrapperMobile>
                    <MenuRoundedIcon />
                    <input type="text" placeholder="Search in emails" />
                    <AccountCircleRoundedIcon />
                </SearchBarWrapperMobile>

                <SearchBarWrapper>
                    <SearchIcon />
                    <input type="text" placeholder="Search mail" />
                    <TuneRoundedIcon />
                </SearchBarWrapper>
            </SearchWrapper>

            <IconsWrapper>
                <HelpOutlineRoundedIcon />
                <SettingsRoundedIcon />
                <AppsRoundedIcon />
                <AccountCircleRoundedIcon />
            </IconsWrapper>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 170px;
  border-bottom: 2px solid whitesmoke;
  height: 50px;
  align-items: center;

  @media screen and (max-width: 900px) {
    grid-template-columns: auto;
  }

  @media screen and (min-width: 900px) {

  }

  @media screen and (min-width: 1200px) {

  }
`
const LogoWrapper = styled.div`
    display: grid;
    height: 45px;
    grid-template-columns: 25% auto;

    @media screen and (max-width: 900px) {
        display: none;
    }
`
const Menu = styled.div`
    display: grid;
    place-items: center;
    cursor: pointer;
`

const GmailLogo = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 900px) {
        display: none;
    }
`

const SearchWrapper = styled.div`
`
const SearchBarWrapperMobile = styled.div`
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 45px;
    width: 100%;

    .MuiSvgIcon-root {
        color: #5f6368;
        cursor: pointer;
    }

    input {
        border: none;
        width: 65%;
        font-size: medium;
        background: none;

        :focus{
            outline: none;
        }
    }

    @media screen and (min-width: 900px) {
        display: none;
    }
` 

const SearchBarWrapper = styled.div`
    background-color: whitesmoke;
    border-radius: 10px;
    display: grid;
    place-items: center;
    grid-template-columns: 10% auto 7%;
    height: 45px;
    width: 100%;
    max-width: 750px;

    .MuiSvgIcon-root {
        color: #5f6368;
        cursor: pointer;
    }

    input {
        border: none;
        width: 100%;
        font-size: medium;
        background: none;

        :focus{
            outline: none;
        }
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
` 
const IconsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    cursor: pointer;

    .MuiSvgIcon-root {
        color: #5f6368;
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
`