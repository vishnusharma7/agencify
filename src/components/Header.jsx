import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <>
       <div className="relative  bg-secondary-light-10 w-full overflow-hidden flex flex-col items-start justify-start text-center text-35xl text-secondary-dark-20 font-paragraphs-para-16px-semibold ">
      <div className="self-stretch bg-primary-dark-80 flex flex-col items-center justify-center py-[30px] px-[100px] text-left text-22xl-5 text-secondary-light-30 font-h4-desktop-h4-bold border-b-[2px] border-solid border-gradient-primary-gradient">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-between">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[9.22px]">
            <img
              className="relative w-[27.7px] h-[27.6px] object-cover"
              alt=""
              src="/stars@2x.png"
            />
            <div className="relative leading-[47.4px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(140.99deg,_#f8efff,_#615c75_70.31%,_#211e3b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
              Agencify
            </div>
          </div>
          <div className="flex-1 shrink-0 flex flex-row items-center justify-end gap-[30px] text-lg font-paragraphs-para-16px-semibold">
            <div className="flex-1 shrink-0 flex flex-row items-center justify-end gap-[30px]">
              <div className="shrink-0 flex flex-row items-center justify-center">
                <div className="relative leading-[27px] font-medium">Home</div>
              </div>
              <div className="shrink-0 flex flex-row items-center justify-center">
                <div className="relative leading-[27px] font-medium">About</div>
              </div>
              <div className="shrink-0 flex flex-row items-center justify-center gap-[6px]">
                <div className="relative leading-[27px] font-medium">
                  Services
                </div>
                <img
                  className="relative w-2 h-1.5 object-cover"
                  alt=""
                  src="/icon@2x.png"
                />
              </div>
              <div className="shrink-0 flex flex-row items-center justify-center">
                <div className="relative leading-[27px] font-medium">
                  Projects
                </div>
              </div>
              <div className="shrink-0 flex flex-row items-center justify-center gap-[6px]">
                <div className="relative leading-[27px] font-medium">Other</div>
                <img
                  className="relative w-2 h-1.5 object-cover"
                  alt=""
                  src="/icon@2x.png"
                />
              </div>
            </div>
            <div className="rounded-26xl-7 [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] shrink-0 flex flex-row items-center justify-center py-2.5 px-[26px] box-border gap-[6px] min-w-[140px] text-sm text-secondary-light-10">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/icon@2x.png"
              />
              <div className="relative leading-[24px] font-semibold">
                Contact Sales
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Header;
