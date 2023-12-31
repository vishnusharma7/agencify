import React from "react";

const Header = () => {
  return (
    <>
      <nav className="w-full bg-main ">
        <div className="w-full p-9 flex justify-between max-w-[1280px] mx-auto">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M13.7931 0.207031L17.5185 10.2747L27.5862 14.0001L17.5185 17.7255L13.7931 27.7932L10.0677 17.7255L0 14.0001L10.0677 10.2747L13.7931 0.207031Z"
              fill="url(#paint0_linear_2_38)"
            />
            <path
              d="M23.9305 1.93115L24.955 4.44808L27.7236 5.37943L24.955 6.31078L23.9305 8.8277L22.906 6.31078L20.1374 5.37943L22.906 4.44808L23.9305 1.93115Z"
              fill="url(#paint1_linear_2_38)"
            />
            <path
              d="M5.86153 19.8623L6.47622 21.3725L8.13739 21.9313L6.47622 22.4901L5.86153 24.0002L5.24684 22.4901L3.58567 21.9313L5.24684 21.3725L5.86153 19.8623Z"
              fill="url(#paint2_linear_2_38)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_38"
                x1="0"
                y1="0.207031"
                x2="27.5862"
                y2="27.7932"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E9D6FF" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2_38"
                x1="20.1374"
                y1="1.93115"
                x2="27.0027"
                y2="9.48303"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E9D6FF" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_2_38"
                x1="3.58567"
                y1="19.8623"
                x2="7.70488"
                y2="24.3934"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E9D6FF" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div >
          <ul className="flex justify-center gap-5 align-middle text-text-color text-2xl">
            <li>Home</li>
           <li>About</li>
           <li>Service</li>
           <li>Projects</li>
           <li>Other</li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
