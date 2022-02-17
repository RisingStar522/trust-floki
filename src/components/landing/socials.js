import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image11 from "../../image/image 11.svg";
import Image12 from "../../image/image 12.svg";
import Image13 from "../../image/image 13.svg";
import Image14 from "../../image/image 14.svg";
import Image15 from "../../image/image 15.svg";

class Socials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p className="relative text-center text-white text-[40px] font-bold">
          Socials
        </p>
        <p className="text-white text-center max-w-[480px] text-[14px] mr-auto ml-auto mt-[20px]">
          Our community grows stronger every day. Please follow our social
          platforms to get the most up-to-date, accurate SHIB information.
        </p>
        <div className="flex flex-row justify-between items-end max-w-[116.8px] ml-auto mr-auto mt-[30px]">
          <a href="https://t.me/TrustFlokiWallet" target="_blank">
            <img
              className="w-[36px] cursor-pointer"
              src={Image11}
              alt="Image11"
            />
          </a>
          <a href="https://twitter.com/TrustFloki" target="_blank">
            <img
              className="w-[36px] cursor-pointer"
              src={Image12}
              alt="Image12"
            />
          </a>
          {/* <img className='w-[36.8px] cursor-pointer' src={Image13} alt='Image13' />
                <img className='w-[31.2px] cursor-pointer' src={Image14} alt='Image14' />
                <img className='w-[34.4px] cursor-pointer' src={Image15} alt='Image15' /> */}
        </div>
        <div className="h-[54.56px] mt-[72px] border-t-[0.5px] border-t-[#5a5761]">
          <div className="webFooter">
            <p className="text-[#bfbfbf] text-[12px] float-left ml-[170px] mt-[42px]">
              ©2021 Trust Floki • All Right Reserved
            </p>
            <p className="text-[#bfbfbf] text-[12px] float-right mr-[170px] mt-[42px]">
              Privacy Policy &nbsp;&nbsp; | &nbsp;&nbsp; Terms & Conditions
            </p>
          </div>
          <div className="mobileFooter w-fit ml-auto mr-auto mt-[30px] hidden">
            <p className="text-[#bfbfbf] text-[12px]">
              ©2021 Trust Floki • All Right Reserved
            </p>
            <p className="text-[#bfbfbf] text-[12px]">
              Privacy Policy &nbsp;&nbsp; | &nbsp;&nbsp; Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Socials;
