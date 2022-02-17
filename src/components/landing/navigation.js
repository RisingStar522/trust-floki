import React from "react";
import Logo from "../../image/logo.png";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  openRightMenu = () => {
    document.getElementById("rightMenu").style.display = "block";
  };
  closeRightMenu = () => {
    document.getElementById("rightMenu").style.display = "none";
  };

  render() {
    return (
      <div className="flex">
        <img
          className="w-[60px] h-[50px] ml-[156px] mt-[24px] mobileLogo cursor-pointer"
          src={Logo}
          alt="Logo"
        />
        <nav className="flex sm:justify-center space-x-4 ml-auto mr-auto mt-[30px] navMedia">
          {[
            ["Home", "#home"],
            ["Features", "#features"],
            ["Wallet Trust Floki", "#wallet"],
            ["Burning Token Mechanism", "#burning"],
            ["Tokenomics", "#tokenomics"],
            ["Partners", "#partners"],
            ["Roadmap", "#roadmap"],
          ].map(([title, url]) => (
            <a
              href={url}
              className="rounded-lg px-3 py-2 text-white font-medium"
            >
              {title}
            </a>
          ))}
        </nav>
        <div className="w-[118px] h-[42px] bg-gradient-to-r from-[#8045FE] to-[#4579FE] rounded-[5px] mt-[29px] mr-[156px] btnMedia">
          <button className="w-[116px] h-[40px] mt-[1px] ml-[0.82px] rounded-[5px] text-button-color text-[16px] bg-[#100a19] hover:bg-gradient-to-r from-[#8045FE] to-[#4579FE] hover:text-white">
            Launch App
          </button>
        </div>
        <svg
          onClick={this.openRightMenu}
          className="ml-auto mr-[156px] mt-[35px] hidden cursor-pointer mobileMenu"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_171_901)">
            <path
              d="M1 6H23C23.2652 6 23.5196 5.89464 23.7071 5.7071C23.8946 5.51957 24 5.26521 24 5C24 4.73478 23.8946 4.48043 23.7071 4.29289C23.5196 4.10536 23.2652 4 23 4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5C0 5.26521 0.105357 5.51957 0.292893 5.7071C0.48043 5.89464 0.734784 6 1 6V6Z"
              fill="white"
            />
            <path
              d="M23 9H9C8.73478 9 8.48043 9.10536 8.29289 9.29289C8.10536 9.48043 8 9.73478 8 10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11H23C23.2652 11 23.5196 10.8946 23.7071 10.7071C23.8946 10.5196 24 10.2652 24 10C24 9.73478 23.8946 9.48043 23.7071 9.29289C23.5196 9.10536 23.2652 9 23 9Z"
              fill="white"
            />
            <path
              d="M23 19H9C8.73478 19 8.48043 19.1053 8.29289 19.2929C8.10536 19.4804 8 19.7348 8 20C8 20.2652 8.10536 20.5195 8.29289 20.7071C8.48043 20.8946 8.73478 21 9 21H23C23.2652 21 23.5196 20.8946 23.7071 20.7071C23.8946 20.5195 24 20.2652 24 20C24 19.7348 23.8946 19.4804 23.7071 19.2929C23.5196 19.1053 23.2652 19 23 19Z"
              fill="white"
            />
            <path
              d="M23 14H1C0.734784 14 0.48043 14.1054 0.292893 14.2929C0.105357 14.4805 0 14.7348 0 15C0 15.2653 0.105357 15.5196 0.292893 15.7071C0.48043 15.8947 0.734784 16 1 16H23C23.2652 16 23.5196 15.8947 23.7071 15.7071C23.8946 15.5196 24 15.2653 24 15C24 14.7348 23.8946 14.4805 23.7071 14.2929C23.5196 14.1054 23.2652 14 23 14Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_171_901">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div
          className="w3-sidebar w3-bar-block w3-card w3-animate-right bg-[#100a19]"
          style={{ display: "none", right: 0 }}
          id="rightMenu"
        >
          <button
            onClick={this.closeRightMenu}
            className="w3-bar-item w3-button w3-large text-white hover:bg-gradient-to-r from-[#8045FE] to-[#4579FE] hover:text-white"
          >
            Close &times;
          </button>
          {[
            ["Home", "#home"],
            ["Features", "#features"],
            ["Wallet Trust Floki", "#wallet"],
            ["Burning Token Mechanism", "#burning"],
            ["Tokenomics", "#tokenomics"],
            ["Partners", "#partners"],
            ["Roadmap", "#roadmap"],
          ].map(([title, url]) => (
            <a href={url} className="w3-bar-item w3-button text-white">
              {title}
            </a>
          ))}
          <button className="w-[116px] h-[40px] mt-[1px] ml-[0.82px] rounded-[5px] text-button-color text-[16px] bg-[#100a19] border-[#8045FE] border-[1px] hover:bg-gradient-to-r from-[#8045FE] to-[#4579FE] hover:text-white">
            Launch App
          </button>
        </div>
      </div>
    );
  }
}

export default Navigation;
