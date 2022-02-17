import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Floki from "../../image/Group 10.png";
import Group from "../../image/Group (4).png";
import ThreeDots from "../../image/threeDots.png";
import BNB from "../../image/bnb.png";
import Tfloki from "../../image/tfloki.png";
import GroupSVG from "../../image/Group.svg";
import Buy from "../../image/buy.png";
import Send from "../../image/send.png";
import SwapIcon from "../../image/swapIcon.png";

class Wallet extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        assets: "assets",
    }
  }
  handleAssets=(val)=>{
    this.setState({assets: val});
  }

  render() {
    return (
        <div className='text-center' id="wallet">
            <p className='text-white text-[40px] font-bold'>Wallet Trust Floki</p>
            <div className='flex w-[808px] h-[556px] ml-auto mr-auto mt-[53px] webWallet'>
                <div className='w-[272px] h-[554px] pl-[16px] pt-[32px] pr-[16px] floki'>
                    <p className='text-white text-left text-[12px]'>TrustFloki has great ambitions to compete with wallets in the world of Decentralized Finance currently. Based on the image of Floki that many people love and cherish, FlokiWallet will be the first project in the Wallet with the main character being the Floki with many dynamic and professional colors. In order to attract the interest of investors, we have built a lot of activities to stimulate demand for wallet users.<br /> Welcome to TrustFloki Wallet and wait for explosion.</p>
                    <img className='w-[190px] ml-auto mr-auto mt-[60px]' src={Floki} alt="Floki" />
                </div>
                <div className='w-[472px] h-[495px] rounded-[10px] ml-auto mr-auto mt-[25px]'>
                    <div className='flex w-[472px] h-[62px] bg-[#6237CC] rounded-t-[9px]'>
                        <img className='w-[34px] h-[35px] mt-[14px] ml-[25px]' src={Group} alt="Group" />
                        <div className='flex w-[180px] h-[33px] rounded-[38px] border-[#C0CEFE] border-[1px] ml-[162px] mt-[14px]'>
                            <svg className='mt-[12px] ml-[19.2px]' width="8" height="9" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5.21436" r="5" fill="#FBD03D"/>
                            </svg>
                            <select className='w-[125px] text-[12px] ml-[11px] bg-[#6237CC] text-white focus:outline-none focus:shadow-none cursor-pointer'>
                                <option>Binance Smart</option>
                                <option>Binance Smart2</option>
                                <option>Binance Smart3</option>
                            </select>
                        </div>
                        <svg className='border-white border-[1px] rounded-[50%] mt-[14px] ml-[17px]' width="29" height="30" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18.5" cy="18.7144" r="18.5" fill="url(#paint0_linear_163_327)"/>
                            <defs>
                                <linearGradient id="paint0_linear_163_327" x1="18.5" y1="0.214355" x2="18.5" y2="37.2144" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFB800"/>
                                    <stop offset="1" stop-color="#5006FF"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='flex w-[472px] h-[42px] bg-[#2b1a53] border-x-[#37275a] border-x-[1px] border-b-[#37275a] border-b-[1px]'>
                        <svg className='mt-[18px] ml-[25px]' width="7" height="8" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5.21436" r="5" fill="#10FFA9"/>
                        </svg>
                        <p className='mt-[13px] ml-[8px] text-[#BBBBBB] text-[11px]'>Connected</p>
                        <div className='ml-[102px] mt-[5px]'>
                            <p className='text-white text-[11px]'>Account 1</p>
                            <p className='text-[#BBBBBB] text-[11px]'>$0.00 USD</p>
                        </div>
                        <img className='h-[20px] mt-[12px] ml-[195px] cursor-pointer' src={ThreeDots} alt="ThreeDots" />
                    </div>
                    <div className='w-[472px] h-[252px] bg-[#2b1a53] border-x-[#37275a] border-x-[1px] border-b-[#37275a] border-b-[1px]'>
                        <div className='flex h-[173px] pl-[24px] pt-[24px]'>
                            <div className='w-[205px] h-[173px] rounded-[10px] bg-[#8045FE]'>
                                <div className='text-center'>
                                    <p className='text-white text-[14px] font-bold mt-[14px]'>$0.00 USD</p>
                                    <img className='w-[60px] h-[60px] mr-auto ml-auto mt-[21px]' src={GroupSVG} alt="GroupSVG" />
                                </div>
                                <div className='flex h-[37px] bg-[#562faa] rounded-b-[10px] mt-[21px]'>
                                    <p className='text-[12px] text-white ml-[16px] mt-[10px]'>$0.00USD</p>
                                    <div className='bg-white w-[40px] h-[37px] rounded-br-[10px] ml-[98px]'>
                                        <svg className='ml-auto mr-auto mt-[11px] cursor-pointer' width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_163_283)">
                                                <path d="M17.4532 7.06409C16.2899 5.16959 13.6439 1.99109 8.99992 1.99109C4.35592 1.99109 1.70992 5.16959 0.546666 7.06409C0.187062 7.64572 -0.00341797 8.31602 -0.00341797 8.99984C-0.00341797 9.68366 0.187062 10.354 0.546666 10.9356C1.70992 12.8301 4.35592 16.0086 8.99992 16.0086C13.6439 16.0086 16.2899 12.8301 17.4532 10.9356C17.8128 10.354 18.0033 9.68366 18.0033 8.99984C18.0033 8.31602 17.8128 7.64572 17.4532 7.06409ZM16.1744 10.1503C15.1754 11.7748 12.9142 14.5086 8.99992 14.5086C5.08567 14.5086 2.82442 11.7748 1.82542 10.1503C1.61177 9.80462 1.4986 9.40625 1.4986 8.99984C1.4986 8.59343 1.61177 8.19506 1.82542 7.84934C2.82442 6.22484 5.08567 3.49109 8.99992 3.49109C12.9142 3.49109 15.1754 6.22184 16.1744 7.84934C16.3881 8.19506 16.5012 8.59343 16.5012 8.99984C16.5012 9.40625 16.3881 9.80462 16.1744 10.1503Z" fill="#8045FE"/>
                                                <path d="M9 5.24988C8.25832 5.24988 7.5333 5.46981 6.91661 5.88187C6.29993 6.29392 5.81928 6.87959 5.53545 7.56482C5.25162 8.25004 5.17736 9.00404 5.32206 9.73147C5.46675 10.4589 5.8239 11.1271 6.34835 11.6515C6.8728 12.176 7.54098 12.5331 8.26841 12.6778C8.99584 12.8225 9.74984 12.7483 10.4351 12.4644C11.1203 12.1806 11.706 11.7 12.118 11.0833C12.5301 10.4666 12.75 9.74156 12.75 8.99988C12.7488 8.00568 12.3533 7.05255 11.6503 6.34954C10.9473 5.64654 9.9942 5.25107 9 5.24988ZM9 11.2499C8.55499 11.2499 8.11998 11.1179 7.74997 10.8707C7.37996 10.6235 7.09157 10.272 6.92127 9.86092C6.75098 9.44978 6.70642 8.99738 6.79323 8.56093C6.88005 8.12447 7.09434 7.72356 7.40901 7.40889C7.72368 7.09422 8.12459 6.87993 8.56105 6.79311C8.99751 6.70629 9.44991 6.75085 9.86104 6.92115C10.2722 7.09145 10.6236 7.37983 10.8708 7.74985C11.118 8.11986 11.25 8.55487 11.25 8.99988C11.25 9.59662 11.0129 10.1689 10.591 10.5909C10.169 11.0128 9.59674 11.2499 9 11.2499Z" fill="#8045FE"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_163_283">
                                                    <rect width="18" height="18" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[205px] h-[173px] ml-[14px] rounded-[10px] bg-[#8045FE]'>
                                <div className='h-[57.6px] border-b-[#8c56fe] border-b-[1px]'>
                                    <img className='relative w-[28px] h-[28px] left-[14px] top-[14px]' src={Buy} alt="Buy" />
                                    <p className='text-center text-white leading-[0px] cursor-pointer'>Buy</p>
                                </div>
                                <div className='h-[57.6px] border-b-[#8c56fe] border-b-[1px]'>
                                    <img className='relative w-[28px] h-[28px] left-[14px] top-[14px]' src={Send} alt="Send" />
                                    <p className='text-center text-white leading-[0px] cursor-pointer'>Send</p>
                                </div>
                                <div className='h-[57.6px]'>
                                    <img className='relative w-[28px] h-[28px] left-[14px] top-[14px]' src={SwapIcon} alt="SwapIcon" />
                                    <p className='text-center text-white leading-[0px] cursor-pointer'>Swap</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-[57px] ml-[45px]'>
                            <div className={this.state.assets=='assets'?'w-[168px] border-b-[5px] border-b-[#8045FE] cursor-pointer':'w-[168px] cursor-pointer'} onClick={()=>this.handleAssets('assets')}>
                                <p className='relative text-white text-[13px] top-[-5px]'>Assets</p>
                            </div>
                            <div className={this.state.assets=='activity'?'w-[168px] border-b-[5px] border-b-[#8045FE] ml-[50px] cursor-pointer':'w-[168px] ml-[50px] cursor-pointer'} onClick={()=>this.handleAssets('activity')}>
                                <p className='relative text-white text-[13px] top-[-5px]'>Activity</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-[472px] h-[69px] bg-[#2b1a53] border-x-[#37275a] border-x-[1px] border-b-[#37275a] border-b-[1px]'>
                        <img className='w-[35px] h-[35px] ml-[45px] mt-[17px]' src={BNB} alt="BNB" />
                        <div className='ml-[10px] mt-[16px]'>
                            <p className='text-[12px] text-white text-left'>0.00 BNB</p>
                            <p className='text-[12px] text-white text-left'>$0.00 USD</p>
                        </div>
                        <svg className='ml-[295px] mt-[30px] cursor-pointer' width="7.2" height="14.4" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 9L0.75 0.339745L0.750001 17.6603L9 9Z" fill="white"/>
                        </svg>
                    </div>
                    <div className='flex w-[472px] h-[69px] bg-[#2b1a53] border-x-[#37275a] border-x-[1px] border-b-[#37275a] border-b-[1px] rounded-b-[10px]'>
                        <img className='w-[35px] h-[35px] ml-[45px] mt-[17px]' src={Tfloki} alt="Tfloki" />
                        <div className='ml-[10px] mt-[16px]'>
                            <p className='text-[12px] text-white text-left'>0.00 TFloki</p>
                            <p className='text-[12px] text-white text-left'>$0.00 USD</p>
                        </div>
                        <svg className='ml-[295px] mt-[30px] cursor-pointer' width="7.2" height="14.4" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 9L0.75 0.339745L0.750001 17.6603L9 9Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='mobileWallet hidden'>
                <div className='max-w-[330px] h-[470px] pl-[16px] pt-[32px] pr-[16px] ml-auto mr-auto mt-[20px] flokiMobile'>
                    <p className='text-white text-center text-[12px]'>TrustFloki has great ambitions to compete with wallets in the world of Decentralized Finance currently. Based on the image of Floki that many people love and cherish, FlokiWallet will be the first project in the Wallet with the main character being the Floki with many dynamic and professional colors. In order to attract the interest of investors, we have built a lot of activities to stimulate demand for wallet users. Welcome to TrustFloki Wallet and wait for explosion.</p>
                    <img className='w-[190px] ml-auto mr-auto mt-[60px]' src={Floki} alt="Floki" />
                </div>
                <div className='max-w-[330px] rounded-[10px] ml-auto mr-auto mt-[25px]'>
                    <div className='flex max-w-[330px] h-[44px] bg-[#6237CC] rounded-t-[9px]'>
                        <img className='w-[20px] h-[21px] mt-[14px] ml-[25px]' src={Group} alt="Group" />
                        <div className='flex w-[143px] h-[24px] rounded-[38px] border-[#C0CEFE] border-[1px] ml-[86px] mt-[14px]'>
                            <svg className='mt-[8px] ml-[17px]' width="6" height="7" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5.21436" r="5" fill="#FBD03D"/>
                            </svg>
                            <select className='w-[100px] text-[10px] ml-[4px] bg-[#6237CC] text-white focus:outline-none focus:shadow-none cursor-pointer'>
                                <option>Binance Smart</option>
                                <option>Binance Smart2</option>
                                <option>Binance Smart3</option>
                            </select>
                        </div>
                        <svg className='mt-[17px] ml-[20px]' width="16" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="white"/>
                            <circle cx="12" cy="12" r="11" fill="url(#paint0_linear_221_31084)"/>
                            <defs>
                                <linearGradient id="paint0_linear_221_31084" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFB800"/>
                                    <stop offset="1" stop-color="#5006FF"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='flex max-w-[330px] bg-[#2b1a53] border-x-[#37275a] border-x-[1px] border-b-[#37275a] border-b-[1px]'>
                        <svg className='mt-[14px] ml-[25px]' width="6" height="6" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#10FFA9"/>
                        </svg>
                        <p className='mt-[8px] ml-[8px] text-[#BBBBBB] text-[11px]'>Connected</p>
                        <div className='ml-[50px] mt-[3px]'>
                            <p className='text-white text-[11px]'>Account 1</p>
                            <p className='text-[#BBBBBB] text-[11px]'>$0.00 USD</p>
                        </div>
                        <img className='h-[15px] mt-[12px] ml-[115px] cursor-pointer' src={ThreeDots} alt="ThreeDots" />
                    </div>
                    <div className='max-w-[330px] bg-[#2b1a53] border-x-[#37275a] border-x-[1px] border-b-[#37275a] border-b-[1px]'>
                        <div className='pt-[24px]'>
                            <div className='max-w-[300px] ml-auto mr-auto rounded-[10px] bg-[#8045FE]'>
                                <div className='text-center'>
                                    <p className='relative text-white text-[14px] font-bold top-[14px]'>$0.00 USD</p>
                                    <img className='w-[60px] h-[60px] mr-auto ml-auto mt-[28px]' src={GroupSVG} alt="GroupSVG" />
                                </div>
                                <div className='flex h-[37px] bg-[#562faa] rounded-b-[10px] mt-[21px]'>
                                    <p className='text-[12px] text-white ml-[16px] mt-[10px]'>$0.00USD</p>
                                    <div className='bg-white w-[40px] h-[37px] rounded-br-[10px] ml-[198px]'>
                                        <svg className='ml-auto mr-auto mt-[11px] cursor-pointer' width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_163_283)">
                                                <path d="M17.4532 7.06409C16.2899 5.16959 13.6439 1.99109 8.99992 1.99109C4.35592 1.99109 1.70992 5.16959 0.546666 7.06409C0.187062 7.64572 -0.00341797 8.31602 -0.00341797 8.99984C-0.00341797 9.68366 0.187062 10.354 0.546666 10.9356C1.70992 12.8301 4.35592 16.0086 8.99992 16.0086C13.6439 16.0086 16.2899 12.8301 17.4532 10.9356C17.8128 10.354 18.0033 9.68366 18.0033 8.99984C18.0033 8.31602 17.8128 7.64572 17.4532 7.06409ZM16.1744 10.1503C15.1754 11.7748 12.9142 14.5086 8.99992 14.5086C5.08567 14.5086 2.82442 11.7748 1.82542 10.1503C1.61177 9.80462 1.4986 9.40625 1.4986 8.99984C1.4986 8.59343 1.61177 8.19506 1.82542 7.84934C2.82442 6.22484 5.08567 3.49109 8.99992 3.49109C12.9142 3.49109 15.1754 6.22184 16.1744 7.84934C16.3881 8.19506 16.5012 8.59343 16.5012 8.99984C16.5012 9.40625 16.3881 9.80462 16.1744 10.1503Z" fill="#8045FE"/>
                                                <path d="M9 5.24988C8.25832 5.24988 7.5333 5.46981 6.91661 5.88187C6.29993 6.29392 5.81928 6.87959 5.53545 7.56482C5.25162 8.25004 5.17736 9.00404 5.32206 9.73147C5.46675 10.4589 5.8239 11.1271 6.34835 11.6515C6.8728 12.176 7.54098 12.5331 8.26841 12.6778C8.99584 12.8225 9.74984 12.7483 10.4351 12.4644C11.1203 12.1806 11.706 11.7 12.118 11.0833C12.5301 10.4666 12.75 9.74156 12.75 8.99988C12.7488 8.00568 12.3533 7.05255 11.6503 6.34954C10.9473 5.64654 9.9942 5.25107 9 5.24988ZM9 11.2499C8.55499 11.2499 8.11998 11.1179 7.74997 10.8707C7.37996 10.6235 7.09157 10.272 6.92127 9.86092C6.75098 9.44978 6.70642 8.99738 6.79323 8.56093C6.88005 8.12447 7.09434 7.72356 7.40901 7.40889C7.72368 7.09422 8.12459 6.87993 8.56105 6.79311C8.99751 6.70629 9.44991 6.75085 9.86104 6.92115C10.2722 7.09145 10.6236 7.37983 10.8708 7.74985C11.118 8.11986 11.25 8.55487 11.25 8.99988C11.25 9.59662 11.0129 10.1689 10.591 10.5909C10.169 11.0128 9.59674 11.2499 9 11.2499Z" fill="#8045FE"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_163_283">
                                                    <rect width="18" height="18" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='max-w-[300px] ml-[14px] mt-[16px] rounded-[10px] bg-[#8045FE]'>
                                <div className='h-[57.6px] border-b-[#8c56fe] border-b-[1px]'>
                                    <div className='flex ml-[120px]'>
                                        <img className='w-[28px] h-[28px] mt-[14px]' src={Buy} alt="Buy" />
                                        <p className='text-center text-white leading-[0px] mt-[25px] ml-[8px] cursor-pointer'>Buy</p>
                                    </div>
                                </div>
                                <div className='h-[57.6px] border-b-[#8c56fe] border-b-[1px]'>
                                    <div className='flex ml-[120px]'>
                                        <img className='w-[28px] h-[28px] mt-[14px]' src={Send} alt="Send" />
                                        <p className='text-center text-white leading-[0px] mt-[25px] ml-[8px] cursor-pointer'>Send</p>
                                    </div>
                                </div>
                                <div className='h-[57.6px]'>
                                    <div className='flex ml-[120px]'>
                                        <img className='w-[28px] h-[28px] mt-[14px]' src={SwapIcon} alt="SwapIcon" />
                                        <p className='text-center text-white leading-[0px] mt-[25px] ml-[8px] cursor-pointer'>Swap</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-[30px] ml-[15px]'>
                            <div className={this.state.assets=='assets'?'w-[130px] border-b-[5px] border-b-[#8045FE] cursor-pointer':'w-[130px] cursor-pointer'} onClick={()=>this.handleAssets('assets')}>
                                <p className='relative text-white text-[13px] top-[-5px]'>Assets</p>
                            </div>
                            <div className={this.state.assets=='activity'?'w-[130px] border-b-[5px] ml-[37px] border-b-[#8045FE] cursor-pointer':'w-[130px] ml-[37px] cursor-pointer'} onClick={()=>this.handleAssets('activity')}>
                                <p className='relative text-white text-[13px] top-[-5px]'>Activity</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex max-w-[330px] h-[69px] bg-[#2b1a53] border-x-[#37275a] border-x-[1px] border-b-[#37275a] border-b-[1px]'>
                        <img className='w-[26px] h-[26px] ml-[15px] mt-[17px]' src={BNB} alt="BNB" />
                        <div className='ml-[10px] mt-[16px]'>
                            <p className='text-[10px] text-white text-left'>0.00 BNB</p>
                            <p className='text-[10px] text-white text-left'>$0.00 USD</p>
                        </div>
                        <svg className='ml-[210px] mt-[30px] cursor-pointer' width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 5.99561L0.75 0.799454L0.75 11.1918L6 5.99561Z" fill="white"/>
                        </svg>
                    </div>
                    <div className='flex max-w-[330px] h-[69px] bg-[#2b1a53] border-x-[#37275a] border-x-[1px] border-b-[#37275a] border-b-[1px] rounded-b-[10px]'>
                        <img className='w-[26px] h-[26px] ml-[15px] mt-[17px]' src={Tfloki} alt="Tfloki" />
                        <div className='ml-[10px] mt-[16px]'>
                            <p className='text-[10px] text-white text-left'>0.00 TFloki</p>
                            <p className='text-[10px] text-white text-left'>$0.00 USD</p>
                        </div>
                        <svg className='ml-[210px] mt-[30px] cursor-pointer' width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 5.99561L0.75 0.799454L0.75 11.1918L6 5.99561Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Wallet;
