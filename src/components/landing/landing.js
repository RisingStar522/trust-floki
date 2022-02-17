import React from 'react';
import Navigation from "./navigation";
import Header from './header';
import Features from './features';
import Wallet from './wallet';
import Burning from './burning';
import Tokenomics from './tokenomics';
import Partners from './partners';
import Roadmap from './roadmap';
import Socials from './socials';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className="min-h-[784px] pb-[20px] w-full bg-[url('./image/Background1.png')]">
          <Navigation />
          <Header />
        </div>
        <div className="min-h-[620px] pb-[40px] w-full bg-[url('./image/Background2.png')]">
          <Features />
        </div>
        <div className="min-h-[822px] pb-[40px] pt-[30px] mt-[-1px] w-full bg-[url('./image/Background3.png')]">
          <Wallet />
        </div>
        <div className="min-h-[900px] pb-[40px] pt-[30px] mt-[-2px] w-full bg-[url('./image/Background4.png')]">
          <Burning />
        </div>
        <div className="min-h-[840px] pb-[40px] pt-[30px] mt-[-2px] w-full bg-[url('./image/Background5.png')]">
          <Tokenomics />
        </div>
        <div className="min-h-[325px] pb-[40px] pt-[30px] mt-[-350px] w-full bg-[url('./image/Background6.png')]">
          <Partners />
        </div>
        <div className="min-h-[150px] pb-[40px] pt-[30px] text-center mt-[-2px] w-full bg-[url('./image/Background7.png')]">
          <p className='relative text-white text-[40px] font-bold' id="roadmap">Roadmap</p>
        </div>
        <div className="min-h-[570px] pb-[40px] pt-[30px] mt-[-2px] w-full bg-[url('./image/Background6.png')]">
          <Roadmap />
        </div>
        <div className="min-h-[385px] pb-[40px] pt-[30px] mt-[-2px] w-full bg-[url('./image/Background7.png')]">
          <Socials />
        </div>
      </div>
    );
  }
}

export default Landing;
