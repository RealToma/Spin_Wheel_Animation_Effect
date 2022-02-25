import React, { useEffect, useState } from "react";
import { Box, Modal } from "@material-ui/core";
import styled from "styled-components";
import ConnectWalletBtnImage01 from "../images/Assets/ConnectWalletbutton.png";
import MetaMaskConnectBg01 from "../images/Connect Wallet Assets/Wood.png"
import ConnectCancelImage01 from "../images/Connect Wallet Assets/Close icon.png";
import ConnectWalletLetterImage01 from "../images/Connect Wallet Assets/Connectwallettext.png";
import ConnectMetaMaskLetterImage01 from "../images/Connect Wallet Assets/MetaMask.png";

const Header = () => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {

    });

    return (
        <StyledComponent>
            {/* <LeftPart>
                <LeftLetter>Open</LeftLetter>
                <RightLetter>Zoo</RightLetter>
            </LeftPart>
            <RightPart>
                <ConnectWalletBtn onClick={() => {
                    setOpen(true);
                }}></ConnectWalletBtn>
            </RightPart>
            <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <ModalBox>
                    <CacelBox onClick={() => {
                        handleClose();
                    }}></CacelBox>
                    <UpImg01>
                        <img src={ConnectWalletLetterImage01} width={"60%"} height={"60%"} alt="walletletter01"></img>
                    </UpImg01>
                    <DownImg01>
                        <img src={ConnectMetaMaskLetterImage01} width={"80%"} height={"80%"} alt="metamask01"></img>

                    </DownImg01>
                </ModalBox>
            </Modal> */}
        </StyledComponent>
    );
};

const StyledComponent = styled(Box)`
    display: flex;
    width: 100%;
    height: 120px;
`
const LeftPart = styled(Box)`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex:1;
    margin-left: 5%;
`
const RightPart = styled(Box)`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex:1;
    margin-right: 5%;
`

const LeftLetter = styled(Box)`
    font-size: 4rem;
    font-weight: 900;
    color: #f3b806;
    @media (max-width: 1000px) {
        font-size: 3rem !important;
    }
    @media (max-width: 700px) {
        font-size: 2.5rem !important;
    }
    @media (max-width: 500px) {
        font-size: 2rem !important;
    }
`

const RightLetter = styled(Box)`
    font-size: 4rem;
    font-weight: 900;
    color: #00BAAD;
    @media (max-width: 1000px) {
        font-size: 3rem !important;
    }
    @media (max-width: 700px) {
        font-size: 2.5rem !important;
    }
    @media (max-width: 500px) {
        font-size: 2rem !important;
    }
`
const ConnectWalletBtn = styled(Box)`
    display: flex;
    width: 200px;
    height: 80px;
    background-image: url(${ConnectWalletBtnImage01});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    &:hover{
        cursor: pointer;
        box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 0px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 900px) {
        width: 150px;
        height: 60px;
    }
    @media (max-width: 700px) {
        width: 120px;
        height: 50px;
    }
    @media (max-width: 500px) {
        width: 100px;
        height: 40px;
    }
`

const ModalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 150px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
    background-image: url(${MetaMaskConnectBg01});
    background-size: 100% 100%;
    @media (max-width: 1000px) {
        width: 500px;
        height: 150px;
    }
    @media (max-width: 700px) {
        width: 400px;
        height: 120px;
    }
    @media (max-width: 600px) {
        width: 350px;
        height: 120px;
    }
    @media (max-width: 500px) {
        width: 300px;
        height: 120px;
    }
    @media (max-width: 400px) {
        width: 250px;
        height: 100px;
    }
    animation: back_animation1 2s 1;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    @keyframes back_animation1 {
        0% {
            opacity: 0%;
        }
        100% {
            opacity: 100%;
        }
    }
`

const CacelBox = styled(Box)`
    position: absolute;
    width: 50px;
    height: 50px;
    right: 0px;
    background-image: url(${ConnectCancelImage01});
    background-size: 100% 100%;
    &:hover{
        cursor: pointer;
    }
`

const UpImg01 = styled(Box)`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`

const DownImg01 = styled(Box)`
    display: flex;
    flex: 2;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
    &:hover{
        cursor: pointer;
    }
`

export default Header;
