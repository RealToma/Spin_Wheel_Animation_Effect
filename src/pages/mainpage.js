import React, { useEffect, useState, useRef } from "react";
import { Box, Modal } from "@material-ui/core";
import styled from "styled-components";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './mainpage.css'
import CasinoCircleImg01 from "../images/wheel01.png";
import CasinoArrow01 from "../images/casino_needle01.png";
import Grass01 from "../images/Assets/BottomleafCoin.png";
import SPIButton01 from "../images/Assets/Button.png";
import ConnectCancelImage01 from "../images/Connect Wallet Assets/Close icon.png";
import SpinAwardImage01 from "../images/Popup Assets/main.png";
import ModalAwardTitle01 from "../images/Popup Assets/TopLogo.png";
import LockImage01 from "../images/Popup Assets/lock.png";
import LockFillImage01 from "../images/Popup Assets/lockfill.png";
import AvailablebtnBG01 from "../images/Popup Assets/AvailablebtnBG.png";
import RemainbtnBG01 from "../images/Popup Assets/RemainbtnBG.png";
import MiddleSpinBG01 from "../images/Popup Assets/MiddleSpinBG.png";
import Icon01 from "../images/taco.png";
import Border01 from "../images/Popup Assets/Border.png"
import Award_Bg01 from "../images/Popup Assets/Background_award.png";
import Award_Cart01 from "../images/Popup Assets/Card_coin.png";


const Mainpage = () => {
    const [spin_flag, set_spin] = useState(false);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const [open1, setOpen1] = useState(false);
    const [timer, setTimer] = useState('00:00:00');
    const Ref = useRef(null);
    const [degree, set_degree] = useState(0);
    const [spin_count, set_spin_count] = useState(10);
    const [woodbox, set_woodbox] = useState(false);

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 * 60 * 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }


    const startTimer = (e) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const clearTimer = (e) => {
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 59999);
        return deadline;
    }

    const spin_setting = () => {
        set_spin(true);
        if (spin_count <= 0) {
            NotificationManager.error('Please charge.', 'Hi!', 2000);
            return;
        }
        let temp_cnt = spin_count;
        temp_cnt--;
        if (spin_flag === true) {
            return;
        }
        set_spin_count(temp_cnt);
        let pos = Math.floor(Math.random() * 16);
        let angle = 22.5 * pos;
        set_degree(angle);
        setTimeout(() => {
            NotificationManager.warning('Wait a sec while showing result.', 'Hello!', 2500);
        }, 9500);
        setTimeout(() => {
            set_woodbox(false);
            set_spin(false);
            handleOpen1();
        }, 12000);

        setTimeout(() => {
            set_woodbox(true);
            set_spin(false);
            handleOpen1();
        }, 15000);
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    });

    return (
        <StyledComponent>
            <BackAnimation className={spin_flag ? "back_animation" : "back_animation1"}>
                {/* <Header /> */}
                <CasinoPart>
                    {/* <CasinoTitle>
                        <img src={CasinoTitle01} width="100%" alt="casino title01"></img>
                    </CasinoTitle> */}
                    <CasinoCircle degree={degree}>
                        <img className={spin_flag ? "rotate " : ''} src={CasinoCircleImg01} width="100%" alt="casino circle01" />
                    </CasinoCircle>
                    <CasinoArrow onClick={() => {
                        spin_setting();
                    }}>
                        <img src={CasinoArrow01} width="35%"  alt="casino arrow01"></img>
                    </CasinoArrow>
                    <CasinoFootImg>
                        <img src={Grass01} width="100%" height={"100%"} alt="casino bottom01"></img>
                    </CasinoFootImg>
                    {/* <CasinoGoldBox onClick={() => {
                        handleOpen();
                    }}>
                        <img src={GoldBox01} width="100%" alt="casino goldbox01"></img>
                    </CasinoGoldBox> */}
                    <SPINBtn>Count : X {spin_count}</SPINBtn>
                </CasinoPart>
            </BackAnimation>
            <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <ModalBox>
                    <ModalAwardTitle></ModalAwardTitle>
                    <CacelBox onClick={() => {
                        handleClose();
                    }}></CacelBox>
                    <UpPart01>
                        <Box display={"flex"} flex={"0.8"} width={"100%"}></Box>
                        <Box display={"flex"} flex={"1"} flexDirection={"column"} width={"100%"}>
                            <Box display={"flex"} flex={"2"} width={"100%"} flexDirection={"column"} color={"white"} fontSize={"1.1rem"} fontWeight={"bold"}>
                                <Box display={"flex"} width={"100%"} justifyContent={"center"}>To get chance to spin the wheel and have 1 SPIN available</Box>
                                <Box display={"flex"} width={"100%"} justifyContent={"center"}>you must lock your Zoonimals NFT for a period of 30 days</Box>
                                <Box display={"flex"} width={"100%"} justifyContent={"center"}>Your Zoonimals NFT will automatically return to your wallet</Box>
                                <Box display={"flex"} width={"100%"} justifyContent={"center"}>once the countdown is complete.</Box>
                            </Box>
                            <Box display={"flex"} flex={"1"} width={"100%"} justifyContent={"space-between"} alignItems={"center"} marginTop={"2%"} color={"white"} fontSize={"1.1rem"} fontWeight={"bold"}>
                                <LeftGreen>ZOONIMALS AVAILABLE</LeftGreen>
                                <SpinRed>SPIN</SpinRed>
                                <RightBlue>REMAIN TIME LOCK</RightBlue>
                            </Box>
                        </Box>
                    </UpPart01>
                    <DownPart01>
                        <ListBox01 marginTop={"3%"} color={"white"} fontSize={"1.2rem"} fontWeight={"bold"}>
                            <LeftPart01>
                                <Box display={"flex"} position={"relative"} width={"70px"} height={"70px"} justifyContent={"center"} alignItems={"center"} style={{ background: `url(${Border01})`, backgroundSize: "100% 100%" }}>
                                    <Box display={"flex"} position={"absolute"} width={"65px"} height={"65px"} style={{ background: `url(${Icon01})`, backgroundSize: "100% 100%" }}>
                                    </Box>
                                </Box>
                                <Box display={"flex"} ml={"5%"}>Name NFT #20</Box>
                            </LeftPart01>
                            <CenterPart01>1</CenterPart01>
                            <RightPart01>
                                <Box display={"flex"} mr={"5%"}>{timer} Left</Box>
                                <Box display={"flex"} mr={"6%"} position={"relative"} width={"70px"} height={"70px"} justifyContent={"center"} alignItems={"center"} style={{ background: `url(${Border01})`, backgroundSize: "100% 100%" }}>
                                    <Box display={"flex"} position={"absolute"} width={"65px"} height={"65px"} style={{ background: `url(${LockFillImage01})`, backgroundSize: "100% 100%" }}>
                                    </Box>
                                </Box>
                            </RightPart01>
                        </ListBox01>
                        <ListBox01 marginTop={"3%"} color={"white"} fontSize={"1.2rem"} fontWeight={"bold"}>
                            <LeftPart01>
                                <Box display={"flex"} position={"relative"} width={"70px"} height={"70px"} justifyContent={"center"} alignItems={"center"} style={{ background: `url(${Border01})`, backgroundSize: "100% 100%" }}>
                                    <Box display={"flex"} position={"absolute"} width={"65px"} height={"65px"} style={{ background: `url(${Icon01})`, backgroundSize: "100% 100%" }}>
                                    </Box>
                                </Box>
                                <Box display={"flex"} ml={"5%"}>Name NFT #20</Box>
                            </LeftPart01>
                            <CenterPart01>1</CenterPart01>
                            <RightPart01>
                                <Box display={"flex"} mr={"5%"}>{timer} Left</Box>
                                <Box display={"flex"} mr={"6%"} position={"relative"} width={"70px"} height={"70px"} justifyContent={"center"} alignItems={"center"} style={{ background: `url(${Border01})`, backgroundSize: "100% 100%" }}>
                                    <Box display={"flex"} position={"absolute"} width={"65px"} height={"65px"} style={{ background: `url(${LockImage01})`, backgroundSize: "100% 100%" }}>
                                    </Box>
                                </Box>
                            </RightPart01>
                        </ListBox01>
                        <ListBox01 marginTop={"2.5%"} color={"white"} fontSize={"1.2rem"} fontWeight={"bold"}>
                            <LeftPart01>
                                <Box display={"flex"} position={"relative"} width={"70px"} height={"70px"} justifyContent={"center"} alignItems={"center"} style={{ background: `url(${Border01})`, backgroundSize: "100% 100%" }}>
                                    <Box display={"flex"} position={"absolute"} width={"65px"} height={"65px"} style={{ background: `url(${Icon01})`, backgroundSize: "100% 100%" }}>
                                    </Box>
                                </Box>
                                <Box display={"flex"} ml={"5%"}>Name NFT #20</Box>
                            </LeftPart01>
                            <CenterPart01>1</CenterPart01>
                            <RightPart01>
                                <Box display={"flex"} mr={"5%"}>{timer} Left</Box>
                                <Box display={"flex"} mr={"6%"} position={"relative"} width={"70px"} height={"70px"} justifyContent={"center"} alignItems={"center"} style={{ background: `url(${Border01})`, backgroundSize: "100% 100%" }}>
                                    <Box display={"flex"} position={"absolute"} width={"65px"} height={"65px"} style={{ background: `url(${LockImage01})`, backgroundSize: "100% 100%" }}>
                                    </Box>
                                </Box>
                            </RightPart01>
                        </ListBox01>
                    </DownPart01>
                </ModalBox>
            </Modal>
            <Modal open={open1} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <ModalBox1>
                    <CacelBox1 onClick={() => {
                        handleClose1();
                        set_woodbox(false);
                    }}></CacelBox1>
                    {woodbox ?
                        <>
                            {/* <UpPart02>
                                <Box display={"flex"} flex={"1"} justifyContent="center" alignItems={"flex-end"}>
                                    Congratulations you have won the the card
                                </Box>
                                <Box display={"flex"} flex={"1"} justifyContent="center" alignItems={"flex-start"}>
                                    NAME CARD
                                </Box>
                            </UpPart02> */}
                            <CenterPart02>
                                <img src={Award_Cart01} width={"400px"} height={"500px"} alt=""></img>
                            </CenterPart02>
                            <Box display={"flex"} flex={"1.5"}></Box>
                            <UpPart02>
                                <Box display={"flex"} flex={"1"} justifyContent="center" alignItems={"center"}>
                                    The rewards goes directly into your coin purse.
                                </Box>
                            </UpPart02>
                        </> :
                        <EmptyWoodBox >Preparing present ...</EmptyWoodBox>}
                </ModalBox1>
            </Modal>
            <NotificationContainer />
        </StyledComponent>
    );
};

const EmptyWoodBox = styled(Box)`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size:30px;
    font-weight: 800;
    flex-direction: column;
    color: white;
    line-height: 32px;
    letter-spacing: -.01em;
    font-style: normal;
`


const BackAnimation = styled(Box)`
    .back_animation {
        display: flex;
        width: 100%;
        height: 100vh;
        flex-direction: column;
        animation: back_animation 0.5s infinite linear;
    }
    .back_animation1 {
        display: flex;
        width: 100%;
        height: 100vh;
        flex-direction: column;
        background-image: url(${require("../images/back_grey01.jpg")});
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    @keyframes back_animation {
        0% {
            background-image: url(${require("../images/back_grey01.jpg")});
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        50% {
            background-image: url(${require("../images/back_grey02.jpg")});
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        100% {
            background-image: url(${require("../images/back_grey01.jpg")});
            background-size: 100% 100%;
            background-repeat: no-repeat;
        } 
    }

`


const CasinoCircle = styled(Box)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 580px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .rotate {
        animation: rotation 10s 1;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
    }
    @keyframes rotation 
    {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(${props => props.degree + 360 * 5}deg);
        }
    }
    @media (max-height: 900px) {
        width: 500px !important;
    }
    @media (max-height: 800px) {
        width: 400px !important;
    }
    @media (max-height: 700px) {
        width: 300px !important;
    }
    @media (max-height: 600px) {
        width: 250px !important;
    }
    @media (max-width: 700px) {
        width: 420px !important;
    }
    @media (max-width: 600px) {
        width: 380px !important;
    }
    @media (max-width: 500px) {
        width: 300px !important;
    }
    @media (max-width: 400px) {
        width: 230px !important;
    }
`

const StyledComponent = styled(Box)`
    display: flex;
    width: 100%;
    height: 100%;
`

const CasinoPart = styled(Box)`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    position: relative;

`

const CasinoArrow = styled(Box)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 40%;
    left: 50%;
    width: 220px;
    transform: translate(-50%, -50%);
    @media (max-width: 700px) {
        width: 170px !important;
    }
    @media (max-width: 600px) {
        width: 140px !important;
    }
    @media (max-height: 800px) {
        width: 170px !important;
    }
    @media (max-height: 700px) {
        width: 150px !important;
    }
    @media (max-height: 600px) {
        width: 130px !important;
    }
    @media (max-width: 500px) {
        width: 100px !important;
        top:48% !important;
    }
    &:hover{
        cursor: pointer;
    }
`

const CasinoFootImg = styled(Box)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    bottom: 0%;
`

const SPINBtn = styled(Box)`
    position: absolute;
    bottom:0%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 230px;
    height: 70px;
    background-color: #181818;
    border-radius: 20px;
    /* border: 1px solid white; */
    /* background-image: url(${SPIButton01}); */
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: white;
    font-size: 2rem;
    font-weight: 900;
    &:hover{
        cursor: pointer;
        box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 0px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.5);
    }
    @media (max-width: 500px) {
        bottom: 10%  !important;
    }
`
const ModalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 900px;
    height: 600px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
    background-image: url(${SpinAwardImage01});
    background-size: 100% 100%;
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
    /* @media (max-width: 1000px) {
        width: 700px;
    }
    @media (max-width: 700px) {
        width: 500px;
    } */
    /* @media (max-width: 700px) {
        width: 400px;

    }
    @media (max-width: 600px) {
        width: 350px;

    }
    @media (max-width: 500px) {
        width: 300px;
        height: 120px;
    }
    @media (max-width: 400px) {
        width: 250px;

    } */
`

const ModalBox1 = styled(Box)`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: 600px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
    background-image: url(${Award_Bg01});
    background-size: 100% 100%;
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
    right: 100px;
    top: -20px;
    background-image: url(${ConnectCancelImage01});
    background-size: 100% 100%;
    &:hover{
        cursor: pointer;
    }
    /* @media (max-width: 1000px) {
        right:80px;
    }
    @media (max-width: 700px) {
        right:80px;
    } */
`

const CacelBox1 = styled(Box)`
    position: absolute;
    width: 50px;
    height: 50px;
    right: -10px;
    top: -20px;
    background-image: url(${ConnectCancelImage01});
    background-size: 100% 100%;
    &:hover{
        cursor: pointer;
    }
`
const UpPart02 = styled(Box)`
    display: flex;
    flex:1;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size:23px;
    font-weight: 800;
    flex-direction: column;
    color: white;
    line-height: 32px;
    letter-spacing: -.01em;
    font-style: normal;
`

const CenterPart02 = styled(Box)`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;

`

const ModalAwardTitle = styled(Box)`
    position: absolute;
    width: 500px;
    height: 250px;
    top:-120px;
    background-image: url(${ModalAwardTitle01});
    background-size: 100% 100%;
    /* @media (max-width: 1000px) {
        width: 300px;
    } */

`
const UpPart01 = styled(Box)`
    display: flex;
    flex: 1;
    width: 65%;
    flex-direction: column;
`

const DownPart01 = styled(Box)`
    display: flex;
    flex: 1.2;
    width: 66%;
    flex-direction: column;
`

const LeftGreen = styled(Box)`
    display: flex;
    width: 40%;
    height: 100%;
    background-image: url(${AvailablebtnBG01});
    background-size: 100% 100%;
    justify-content: center;
    align-items: center;
`

const SpinRed = styled(Box)`
    display: flex;
    width: 10%;
    height: 100%;
    background-image: url(${MiddleSpinBG01});
    background-size: 100% 100%;
    justify-content: center;
    align-items: center;
`

const RightBlue = styled(Box)`
    display: flex;
    width: 40%;
    height: 100%;
    background-image: url(${RemainbtnBG01});
    background-size: 100% 100%;
    justify-content: center;
    align-items: center;
`

const ListBox01 = styled(Box)`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

const LeftPart01 = styled(Box)`
    display: flex;
    width: 40%;
    height: 80px;
    align-items: center;
    justify-content: flex-start;
`

const CenterPart01 = styled(Box)`
    display: flex;
    width: 10%;
    height:80px;
    align-items: center;
    justify-content: center;
`
const RightPart01 = styled(Box)`
    display: flex;
    width: 40%;
    height: 80px;
    align-items: center;
    justify-content: flex-end;
`


export default Mainpage;
