import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BurningIMG from "../../image/burning.png";

class Burning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="text-center" id="burning">
        <p className="relative text-white text-[40px] font-bold mt-[100px]">
          Burning Token Mechanism
        </p>
        <img
          className="w-[280px] h-[505px] ml-auto mr-auto mt-[-130px]"
          src={BurningIMG}
          alt="BurningIMG"
        />
        <div className="max-w-[804px] h-[200px] ml-auto mr-auto mt-[45px]">
          <p className="text-[17.5px] ml-[20px] mr-[20px] border-dashed border-t-[1px] border-t-[#5a5761] text-white text-left pt-[28px] burningMobile">
            Preventing TrustFloki token inflation, we use token burn mechanism
            when implementing transactions that will be divide on <b>40%</b> of
            token to the Liquidity Provider, <b>50%</b> for Staking reward and{" "}
            <b>10%</b> for burning
          </p>
          <p className="text-[17.5px] ml-[20px] mr-[20px] text-white text-left mt-[28px] burningMobile">
            The diffirent activities: Farming, Bridge… is the same mechanism. In
            the future we look forwards to the TrustFloki's prosperity, tokens
            burning events will be notified to you as soon as possible.
          </p>
        </div>
      </div>
    );
  }
}

export default Burning;
