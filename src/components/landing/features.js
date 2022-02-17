import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bridge from "../../image/bridge.png";
import Swap from "../../image/swap.png";
import Farming from "../../image/farming.png";
import Staking from "../../image/staking.png";
import Reflection from "../../image/reflection.png";

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 750,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div
        className="text-center pl-[158px] pr-[158px] mt-[-1px] FeaturesDev"
        id="features"
      >
        <p className="text-white text-[40px] font-bold">Features</p>
        <Slider {...settings} className="mt-[50px] webSlide">
          <div className="pl-[10px]">
            <div className="max-w-[290px] p-[32px] text-left Feature">
              <img className="w-[50px] h-[50px]" src={Bridge} alt="Bridge" />
              <p className="text-white mt-[30px] text-[18px]">Bridge</p>
              <p className="text-white mt-[30px] text-[14px]">
                Built to support ETH, BSC, Polygon, Solana. The ambition of
                multi-chain and cross-chain, we will complete to upgrade more
                Blockchain in the future.
              </p>
            </div>
          </div>
          <div className="pl-[10px]">
            <div className="max-w-[290px] p-[32px] text-left Feature">
              <img className="w-[50px] h-[50px]" src={Swap} alt="Swap" />
              <p className="text-white mt-[30px] text-[18px]">Swap</p>
              <p className="text-white mt-[30px] text-[14px]">
                Crosschain Fee is 0.00 %, Gas fee 0.9 USDT Minimum Crosschain
                Amount is 8 USDC Maximum Crosschain Amount is 2.000.000 USDC
                Estimated Time of Crosschain Arrival is 5-12 min Crosschain
                amount larger than 1.000.000 USDC could take up to 12 hours
              </p>
            </div>
          </div>
          <div className="pl-[10px]">
            <div className="max-w-[290px] p-[32px] text-left Feature">
              <img className="w-[50px] h-[50px]" src={Farming} alt="Farming" />
              <p className="text-white mt-[30px] text-[18px]">Farming</p>
              <p className="text-white mt-[30px] text-[14px]">
                Aggregate currency pairs with high APY% to attract Liquidity
                Providers come FlokiWallet. We will carefully select tokens with
                high security and reduce risk as much as possible for LP
              </p>
            </div>
          </div>
          <div className="pl-[10px]">
            <div className="max-w-[290px] p-[32px] text-left Feature">
              <img className="w-[50px] h-[50px]" src={Staking} alt="Staking" />
              <p className="text-white mt-[30px] text-[18px]">Staking</p>
              <p className="text-white mt-[30px] text-[14px]">
                Earn $TFLOKI rewards with single-token deposits,no need to worry
                about impermanent loss
              </p>
            </div>
          </div>
          <div className="pl-[10px]">
            <div className="max-w-[290px] p-[32px] text-left Feature">
              <img
                className="w-[50px] h-[50px]"
                src={Reflection}
                alt="Reflection"
              />
              <p className="text-white mt-[30px] text-[18px]">Tax 10%</p>
              <p className="text-white mt-[30px] text-[14px]">
                5% Add LP and 5% Redistributed to all Holders
              </p>
            </div>
          </div>
        </Slider>
        <div className="mobileSlide hidden">
          <div className="max-w-[290px] p-[32px] ml-auto mr-auto mt-[16px] text-left Feature">
            <img className="w-[50px] h-[50px]" src={Bridge} alt="Bridge" />
            <p className="text-white mt-[30px] text-[18px]">Bridge</p>
            <p className="text-white mt-[30px] text-[14px]">
              Built to support ETH, BSC, Polygon, Solana. The ambition of
              multi-chain and cross-chain, we will complete to upgrade more
              Blockchain in the future.
            </p>
          </div>
          <div className="max-w-[290px] p-[32px] ml-auto mr-auto mt-[16px] text-left Feature">
            <img className="w-[50px] h-[50px]" src={Swap} alt="Swap" />
            <p className="text-white mt-[30px] text-[18px]">Swap</p>
            <p className="text-white mt-[30px] text-[14px]">
              Crosschain Fee is 0.00 %, Gas fee 0.9 USDT Minimum Crosschain
              Amount is 8 USDC Maximum Crosschain Amount is 2.000.000 USDC
              Estimated Time of Crosschain Arrival is 5-12 min Crosschain amount
              larger than 1.000.000 USDC could take up to 12 hours
            </p>
          </div>
          <div className="max-w-[290px] p-[32px] ml-auto mr-auto mt-[16px] text-left Feature">
            <img className="w-[50px] h-[50px]" src={Farming} alt="Farming" />
            <p className="text-white mt-[30px] text-[18px]">Farming</p>
            <p className="text-white mt-[30px] text-[14px]">
              Aggregate currency pairs with high APY% to attract Liquidity
              Providers come FlokiWallet. We will carefully select tokens with
              high security and reduce risk as much as possible for LP
            </p>
          </div>
          <div className="max-w-[290px] p-[32px] ml-auto mr-auto mt-[16px] text-left Feature">
            <img className="w-[50px] h-[50px]" src={Staking} alt="Staking" />
            <p className="text-white mt-[30px] text-[18px]">Staking</p>
            <p className="text-white mt-[30px] text-[14px]">
              Earn FTrust rewards with single-token deposits,no need to worry
              about impermanent loss
            </p>
          </div>
          <div className="max-w-[290px] p-[32px] ml-auto mr-auto mt-[16px] text-left Feature">
            <img
              className="w-[50px] h-[50px]"
              src={Reflection}
              alt="Reflection"
            />
            <p className="text-white mt-[30px] text-[18px]">Reflection</p>
            <p className="text-white mt-[30px] text-[14px]">
              Tax 10% - 5% reflection -5% add lp
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
