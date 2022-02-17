import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Trust from "../../image/Trust.png";
import Hover3 from "../../image/33.png";
import Telegram from "../../image/telegram2.png";
import Telegram1 from "../../image/telegram1.png";
import Hover1 from "../../image/11.png";
import Hover2 from "../../image/22.png";
import Youtube from "../../image/youtube.png";
import Hover4 from "../../image/44.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      one: true,
      two: true,
      three: true,
      four: true,
    };
  }
  mouseOver = (value) => {
    this.setState({ [value]: false });
  };
  mouseLeave = () => {
    this.setState({ one: true, two: true, three: true, four: true });
  };

  render() {
    return (
      <div id="home">
        <div className="row pl-[158px] webHead">
          <div className="col-md-6 text-center mt-[200px]">
            <div className="flex">
              <p className="text-[40px] text-[#8045FE] font-bold">
                Trust Floki
              </p>
              <p className="text-[25px] text-white ml-[10px] mt-[15px]">
                (TFLOKI)
              </p>
            </div>
            <p className="text-white font-normal text-[16px] text-left">
              Wallet multichain, Swap, Liquidity Providers, Pools, Staking
            </p>
            <p className="text-white mt-[15px] text-[14px] text-left w-[415px]">
              TrustFloki Wallet will represent the next generation of Defi. You
              can use TrustFloki for Store, Swap and Manage Assets on
              multi-chain with +10,000 cryptocurrency only with TrustFloki
              Wallet.
            </p>
            <div className="flex mt-[30px]">
              <div className="w-[102px] h-[42px] bg-gradient-to-r from-[#8045FE] to-[#4579FE] rounded-[5px]">
                <button className="w-[100px] h-[40px] mt-[1px] ml-[0.82px] rounded-[5px] text-button-color text-[12px] bg-[#100a19] hover:bg-gradient-to-r from-[#8045FE] to-[#4579FE] hover:text-white">
                  <svg
                    className="w-[18px] relative top-[10px] left-[20px]"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 5L17 5M17 5L13 1M17 5L13 9M13 15L0.999999 15M0.999999 15L5 19M0.999999 15L5 11"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="relative left-[10px] top-[-10px]">Swap</p>
                </button>
              </div>
              <div className="w-[118px] h-[42px] bg-gradient-to-r from-[#8045FE] to-[#4579FE] rounded-[5px] ml-[10px]">
                <a href="https://docs.trustfloki.io/" target="_blank">
                  <button className="w-[116px] h-[40px] mt-[1px] ml-[0.82px] rounded-[5px] text-button-color text-[12px] bg-[#100a19] hover:bg-gradient-to-r from-[#8045FE] to-[#4579FE] hover:text-white">
                    White Paper
                  </button>
                </a>
              </div>
              <div className="w-[72px] h-[42px] bg-gradient-to-r from-[#8045FE] to-[#4579FE] rounded-[5px] ml-[10px]">
                <a
                  href="https://www.pinksale.finance/#/launchpad/0x5de0dBB14f322BEdDe792AA6EB3bFbeD38B096f7?chain=BSC"
                  target="_blank"
                >
                  <button className="w-[70px] h-[40px] mt-[1px] ml-[0.82px] rounded-[5px] text-button-color text-[12px] bg-[#100a19] hover:bg-gradient-to-r from-[#8045FE] to-[#4579FE] hover:text-white">
                    Buy Floki
                  </button>
                </a>
              </div>
              <div className="w-[92px] h-[42px] bg-gradient-to-r from-[#8045FE] to-[#4579FE] rounded-[5px] ml-[10px]">
                <a
                  href="https://bscscan.com/address/0x91Dd444AE0Fdfe7F3b5e8178Fa8e30349f679f35"
                  target="_blank"
                >
                  <button className="w-[90px] h-[40px] mt-[1px] ml-[0.82px] rounded-[5px] text-button-color text-[12px] bg-[#100a19] hover:bg-gradient-to-r from-[#8045FE] to-[#4579FE] hover:text-white">
                    Contract
                  </button>
                </a>
              </div>
            </div>
            <div className="flex mt-[175px]">
              <p className="text-white text-[12px]">Follow us</p>
              <svg
                className="ml-[11px] mt-[9px]"
                width="54"
                height="2"
                viewBox="0 0 54 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="1.25"
                  x2="54"
                  y2="1.25"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              {this.state.one ? (
                <img
                  onMouseOver={() => this.mouseOver("one")}
                  className="ml-[16px] cursor-pointer w-[19px] h-[19px] mt-[-1px]"
                  src={Telegram}
                  alt="Telegram"
                />
              ) : (
                <a href="https://t.me/TrustFlokiWallet" target="_blank">
                  <img
                    onMouseLeave={this.mouseLeave}
                    className="ml-[16px] cursor-pointer w-[19px] h-[19px] mt-[-1px]"
                    src={Telegram1}
                    alt="Telegram1"
                  />
                </a>
              )}
              {this.state.three ? (
                <svg
                  onMouseOver={() => this.mouseOver("three")}
                  className="ml-[16px] cursor-pointer"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM17.4791 9.35632C17.4844 9.47443 17.4869 9.59308 17.4869 9.71228C17.4869 13.3519 14.7166 17.5488 9.65021 17.549H9.65039H9.65021C8.09473 17.549 6.64728 17.0931 5.42834 16.3118C5.64386 16.3372 5.86322 16.3499 6.08533 16.3499C7.37585 16.3499 8.56348 15.9097 9.50629 15.1708C8.30054 15.1485 7.28394 14.3522 6.93311 13.2578C7.10101 13.29 7.27368 13.3076 7.45074 13.3076C7.70215 13.3076 7.94568 13.2737 8.17712 13.2105C6.91681 12.9582 5.96741 11.8444 5.96741 10.5106C5.96741 10.4982 5.96741 10.487 5.96777 10.4755C6.33893 10.6818 6.76337 10.806 7.21527 10.8199C6.47571 10.3264 5.98956 9.48285 5.98956 8.52722C5.98956 8.02258 6.12598 7.5498 6.36255 7.14276C7.72083 8.80939 9.75073 9.90546 12.0399 10.0206C11.9927 9.81885 11.9683 9.60864 11.9683 9.39258C11.9683 7.87207 13.2019 6.63849 14.723 6.63849C15.5153 6.63849 16.2308 6.97339 16.7335 7.50879C17.361 7.38501 17.9502 7.15576 18.4825 6.84027C18.2765 7.48315 17.84 8.02258 17.2712 8.36371C17.8284 8.29706 18.3594 8.14929 18.8529 7.92993C18.4843 8.48236 18.0168 8.96759 17.4791 9.35632Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <a href="https://twitter.com/TrustFloki" target="_blank">
                  <img
                    onMouseLeave={this.mouseLeave}
                    className="ml-[16px] cursor-pointer w-[18px] h-[18px]"
                    src={Hover3}
                    alt="Hover3"
                  />
                </a>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="w-[400px] h-[470px] mt-[100px]"
              src={Trust}
              alt="Trust"
            />
          </div>
        </div>
        <div className="mobileHead text-center pl-[20px] pr-[20px] hidden">
          <div className="inline-flex">
            <p className="text-[40px] text-[#8045FE] font-bold">Trust Floki</p>
            <p className="text-[25px] text-white ml-[10px] mt-[15px]">
              (TFLOKI)
            </p>
          </div>
          <p className="text-white font-normal text-[16px]">
            Wallet multichain, Swap, Liquidity Providers, Pools, Staking
          </p>
          <p className="text-white mt-[15px] text-[14px] max-w-[415px] ml-auto mr-auto">
            TrustFloki Wallet will represent the next generation of Defi. You
            can use TrustFloki for Store, Swap and Manage Assets on multi-chain
            with +10,000 cryptocurrency only with TrustFloki Wallet.
          </p>
          <img
            className="w-[250px] h-[320px] mt-[50px] ml-auto mr-auto"
            src={Trust}
            alt="Trust"
          />
          <div className="w-[300px] h-[42px] ml-auto mr-auto mt-[17px] bg-gradient-to-r from-[#8045FE] to-[#4579FE] rounded-[5px]">
            <button className="w-[298px] h-[40px] mt-[1px] ml-[0.82px] rounded-[5px] text-button-color text-[12px] bg-[#100a19] hover:bg-gradient-to-r from-[#8045FE] to-[#4579FE] hover:text-white">
              <svg
                className="w-[18px] relative top-[10px] left-[115px]"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 5L17 5M17 5L13 1M17 5L13 9M13 15L0.999999 15M0.999999 15L5 19M0.999999 15L5 11"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="relative left-[10px] top-[-10px]">Swap</p>
            </button>
          </div>
          <div className="w-[300px] h-[42px] ml-auto mr-auto mt-[8px] bg-gradient-to-r from-[#8045FE] to-[#4579FE] rounded-[5px]">
            <a href="https://docs.trustfloki.io/" target="_blank">
              <button className="w-[298px] h-[40px] mt-[1px] ml-[0.82px] rounded-[5px] text-button-color text-[12px] bg-[#100a19] hover:bg-gradient-to-r from-[#8045FE] to-[#4579FE] hover:text-white">
                White Paper
              </button>
            </a>
          </div>
          <div className="w-[300px] h-[42px] ml-auto mr-auto mt-[8px] bg-gradient-to-r from-[#8045FE] to-[#4579FE] rounded-[5px]">
            <a
              href="https://www.pinksale.finance/#/launchpad/0x5de0dBB14f322BEdDe792AA6EB3bFbeD38B096f7?chain=BSC"
              target="_blank"
            >
              <button className="w-[298px] h-[40px] mt-[1px] ml-[0.82px] rounded-[5px] text-button-color text-[12px] bg-[#100a19] hover:bg-gradient-to-r from-[#8045FE] to-[#4579FE] hover:text-white">
                Buy Floki
              </button>
            </a>
          </div>
          <div className="w-[300px] h-[42px] ml-auto mr-auto mt-[8px] bg-gradient-to-r from-[#8045FE] to-[#4579FE] rounded-[5px]">
            <a
              href="https://bscscan.com/address/0x91Dd444AE0Fdfe7F3b5e8178Fa8e30349f679f35"
              target="_blank"
            >
              <button className="w-[298px] h-[40px] mt-[1px] ml-[0.82px] rounded-[5px] text-button-color text-[12px] bg-[#100a19] hover:bg-gradient-to-r from-[#8045FE] to-[#4579FE] hover:text-white">
                Contract
              </button>
            </a>
          </div>
          <div id="home">
            <div className="row pl-[158px] webHead">
              <div className="col-md-6 text-center mt-[200px]">
                <div className="flex">
                  <p className="text-[40px] text-[#8045FE] font-bold">
                    Trust Floki
                  </p>
                  <p className="text-[25px] text-white ml-[10px] mt-[15px]">
                    (TFLOKI)
                  </p>
                </div>
                <p className="text-white font-normal text-[16px] text-left">
                  Wallet multichain, Swap, Liquidity Providers, Pools, Staking
                </p>
                <p className="text-white mt-[15px] text-[14px] text-left w-[415px]">
                  TrustFloki Wallet will represent the next generation of Defi.
                  You can use TrustFloki for Store, Swap and Manage Assets on
                  multi-chain with +10,000 cryptocurrency only with TrustFloki
                  Wallet.
                </p>
                <div className="flex mt-[30px]">
                  <div className="w-[102px] h-[42px] bg-gradient-to-r from-[#8045FE] to-[#4579FE] rounded-[5px]">
                    <button className="w-[100px] h-[40px] mt-[1px] ml-[0.82px] rounded-[5px] text-button-color text-[12px] bg-[#100a19] hover:bg-gradient-to-r from-[#8045FE] to-[#4579FE] hover:text-white">
                      <svg
                        className="w-[18px] relative top-[10px] left-[20px]"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 5L17 5M17 5L13 1M17 5L13 9M13 15L0.999999 15M0.999999 15L5 19M0.999999 15L5 11"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="relative left-[10px] top-[-10px]">Swap</p>
                    </button>
                  </div>
                  <div className="w-[118px] h-[42px] bg-gradient-to-r from-[#8045FE] to-[#4579FE] rounded-[5px] ml-[10px]">
                    <button className="w-[116px] h-[40px] mt-[1px] ml-[0.82px] rounded-[5px] text-button-color text-[12px] bg-[#100a19] hover:bg-gradient-to-r from-[#8045FE] to-[#4579FE] hover:text-white">
                      White Paper
                    </button>
                  </div>
                  <div className="w-[72px] h-[42px] bg-gradient-to-r from-[#8045FE] to-[#4579FE] rounded-[5px] ml-[10px]">
                    <button className="w-[70px] h-[40px] mt-[1px] ml-[0.82px] rounded-[5px] text-button-color text-[12px] bg-[#100a19] hover:bg-gradient-to-r from-[#8045FE] to-[#4579FE] hover:text-white">
                      Buy Floki
                    </button>
                  </div>
                  <div className="w-[92px] h-[42px] bg-gradient-to-r from-[#8045FE] to-[#4579FE] rounded-[5px] ml-[10px]">
                    <button className="w-[90px] h-[40px] mt-[1px] ml-[0.82px] rounded-[5px] text-button-color text-[12px] bg-[#100a19] hover:bg-gradient-to-r from-[#8045FE] to-[#4579FE] hover:text-white">
                      Contract
                    </button>
                  </div>
                </div>
                <div className="flex mt-[175px]">
                  <p className="text-white text-[12px]">Follow us</p>
                  <svg
                    className="ml-[11px] mt-[9px]"
                    width="54"
                    height="2"
                    viewBox="0 0 54 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="1.25"
                      x2="54"
                      y2="1.25"
                      stroke="white"
                      stroke-width="1.5"
                    />
                  </svg>
                  {this.state.one ? (
                    <svg
                      onMouseOver={() => this.mouseOver("one")}
                      className="ml-[16px] cursor-pointer"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0C5.37256 0 0 5.37256 0 12C0 18.6274 5.37256 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37256 18.6274 0 12 0ZM16.578 6.1111L14.9183 6.11184C13.6168 6.11184 13.3651 6.73031 13.3651 7.63777V9.63879H16.4688L16.4673 12.7729H13.3654V20.8158H10.1281V12.7729H7.42195V9.63879H10.1281V7.32743C10.1281 4.64507 11.767 3.1842 14.1596 3.1842L16.5783 3.18789V6.1111H16.578Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <img
                      onMouseLeave={this.mouseLeave}
                      className="ml-[16px] cursor-pointer w-[18px] h-[18px]"
                      src={Hover1}
                      alt="Hover1"
                    />
                  )}
                  {this.state.two ? (
                    <img
                      onMouseOver={() => this.mouseOver("two")}
                      className="ml-[16px] cursor-pointer w-[18px] h-[18px]"
                      src={Telegram}
                      alt="Telegram"
                    />
                  ) : (
                    <img
                      onMouseLeave={this.mouseLeave}
                      className="ml-[16px] cursor-pointer w-[18px] h-[18px]"
                      src={Hover2}
                      alt="Hover2"
                    />
                  )}
                  {this.state.three ? (
                    <svg
                      onMouseOver={() => this.mouseOver("three")}
                      className="ml-[16px] cursor-pointer"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM17.4791 9.35632C17.4844 9.47443 17.4869 9.59308 17.4869 9.71228C17.4869 13.3519 14.7166 17.5488 9.65021 17.549H9.65039H9.65021C8.09473 17.549 6.64728 17.0931 5.42834 16.3118C5.64386 16.3372 5.86322 16.3499 6.08533 16.3499C7.37585 16.3499 8.56348 15.9097 9.50629 15.1708C8.30054 15.1485 7.28394 14.3522 6.93311 13.2578C7.10101 13.29 7.27368 13.3076 7.45074 13.3076C7.70215 13.3076 7.94568 13.2737 8.17712 13.2105C6.91681 12.9582 5.96741 11.8444 5.96741 10.5106C5.96741 10.4982 5.96741 10.487 5.96777 10.4755C6.33893 10.6818 6.76337 10.806 7.21527 10.8199C6.47571 10.3264 5.98956 9.48285 5.98956 8.52722C5.98956 8.02258 6.12598 7.5498 6.36255 7.14276C7.72083 8.80939 9.75073 9.90546 12.0399 10.0206C11.9927 9.81885 11.9683 9.60864 11.9683 9.39258C11.9683 7.87207 13.2019 6.63849 14.723 6.63849C15.5153 6.63849 16.2308 6.97339 16.7335 7.50879C17.361 7.38501 17.9502 7.15576 18.4825 6.84027C18.2765 7.48315 17.84 8.02258 17.2712 8.36371C17.8284 8.29706 18.3594 8.14929 18.8529 7.92993C18.4843 8.48236 18.0168 8.96759 17.4791 9.35632Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <img
                      onMouseLeave={this.mouseLeave}
                      className="ml-[16px] cursor-pointer w-[18px] h-[18px]"
                      src={Hover3}
                      alt="Hover3"
                    />
                  )}
                  {this.state.four ? (
                    <img
                      onMouseOver={() => this.mouseOver("four")}
                      className="ml-[16px] cursor-pointer w-[18px] h-[18px]"
                      src={Youtube}
                      alt="Youtube"
                    />
                  ) : (
                    <img
                      onMouseLeave={this.mouseLeave}
                      className="ml-[16px] cursor-pointer w-[18px] h-[18px]"
                      src={Hover4}
                      alt="Hover4"
                    />
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <img
                  className="w-[400px] h-[470px] mt-[100px]"
                  src={Trust}
                  alt="Trust"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
