import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Coin from "../../image/coin.svg";
import Pink from "../../image/pink.svg";
import Pancake from "../../image/pancake.svg";
import Gecko from "../../image/gecko.svg";
import Bsc from "../../image/bsc.svg";

class Partners extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
        <div className='text-center' id="partners">
            <p className='relative text-white text-[40px] font-bold mt-[50px]'>Partners</p>
            <div className='flex flex-row justify-between items-end mt-[40px] max-w-[1016px] ml-auto mr-auto border-dashed border-b-[1px] border-b-[#5a5761] pb-[40px] webPartner'>
                <div className='h-[85px] w-[185px] partner cursor-pointer'>
                    <img className='w-[145px] ml-auto mr-auto mt-[25px]' src={Coin} at="Coin" />
                </div>
                <div className='h-[85px] w-[185px] partner cursor-pointer'>
                    <img className='w-[112px] ml-auto mr-auto mt-[25px]' src={Pink} at="Pink" />
                </div>
                <div className='h-[85px] w-[185px] partner cursor-pointer'>
                    <img className='w-[148px] ml-auto mr-auto mt-[25px]' src={Pancake} at="Pancake" />
                </div>
                <div className='h-[85px] w-[185px] partner cursor-pointer'>
                    <img className='w-[131px] ml-auto mr-auto mt-[25px]' src={Gecko} at="Gecko" />
                </div>
                <div className='h-[85px] w-[185px] partner cursor-pointer'>
                    <img className='w-[132px] ml-auto mr-auto mt-[25px]' src={Bsc} at="Bsc" />
                </div>
            </div>
            <div className='mobilePartner hidden'>
                <div className='flex flex-row justify-between items-end mt-[40px] max-w-[300px] ml-auto mr-auto'>
                    <div className='h-[65px] w-[140px] partner cursor-pointer'>
                        <img className='w-[110px] ml-auto mr-auto mt-[25px]' src={Coin} at="Coin" />
                    </div>
                    <div className='h-[65px] w-[140px] partner cursor-pointer'>
                        <img className='w-[86px] ml-auto mr-auto mt-[25px]' src={Pink} at="Pink" />
                    </div> 
                </div>
                <div className='flex flex-row justify-between items-end mt-[20px] max-w-[300px] ml-auto mr-auto'>
                    <div className='h-[65px] w-[140px] partner cursor-pointer'>
                        <img className='w-[112px] ml-auto mr-auto mt-[25px]' src={Pancake} at="Pancake" />
                    </div>
                    <div className='h-[65px] w-[140px] partner cursor-pointer'>
                        <img className='w-[103px] ml-auto mr-auto mt-[25px]' src={Gecko} at="Pink" />
                    </div> 
                </div>
                <div className='flex flex-row justify-between items-end mt-[20px] max-w-[140px] ml-auto mr-auto'>
                    <div className='h-[65px] w-[140px] partner cursor-pointer'>
                        <img className='w-[101px] ml-auto mr-auto mt-[25px]' src={Bsc} at="Bsc" />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Partners;
