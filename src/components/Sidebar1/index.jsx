import React from "react";

// import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";


const SignInNavigation = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start my-2 w-[85%] md:w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
            size="txtMontserratBold36WhiteA700"
          >
            {props?.boardOne}
          </Text>
          <div className="flex flex-row gap-5 items-start justify-start mt-[59px] w-[94%] md:w-full">
            <Img
              className="h-[18px] mt-0.5 w-[18px]"
              src="images/img_clock.svg"
              alt="clock"
            />
            <Text
              className="text-lg text-white-A700"
              size="txtMontserratBold18WhiteA700"
            >
              {props?.dashboard}
            </Text>
          </div>
          <div className="flex flex-row gap-5 items-center justify-start mt-[39px] w-full">
            <Img className="h-5" src="images/img_offer.svg" alt="offer" />
            <Text
              className="text-lg text-white-A700"
              size="txtMontserratRegular18"
            >
              {props?.transactions}
            </Text>
          </div>
          <div className="flex flex-row gap-5 items-start justify-start mt-10 w-[87%] md:w-full">
            <Img
              className="h-[18px] mt-0.5 w-[18px]"
              src="images/img_calendar.svg"
              alt="calendar"
            />
            <Text
              className="text-lg text-white-A700"
              size="txtMontserratRegular18"
            >
              {props?.schedules}
            </Text>
          </div>
          <div className="flex flex-row gap-5 items-center justify-start mt-10 w-[58%] md:w-full">
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_share.svg"
              alt="share"
            />
            <Text
              className="text-lg text-white-A700"
              size="txtMontserratRegular18"
            >
              {props?.users}
            </Text>
          </div>
          <div className="flex flex-row gap-[21px] items-start justify-start mt-[41px] w-3/4 md:w-full">
            <Img
              className="h-[18px] w-[17px]"
              src="images/img_settings.svg"
              alt="settings"
            />
            <Text
              className="text-lg text-white-A700"
              size="txtMontserratRegular18"
            >
              {props?.settingsOne}
            </Text>
          </div>
          <Text
            className="mt-[396px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {props?.help}
          </Text>
          <Text
            className="mt-[17px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {props?.contactus}
          </Text>
        </div>
      </div>
    </>
  );
};

SignInNavigation.defaultProps = {
  boardOne: "Board",
  dashboard: "Dashboard",
  transactions: "Transactions",
  schedules: "Schedules",
  users: "Users",
  settingsOne: "Settings",
  help: "Help",
  contactus: "Contact Us",
};

export default SignInNavigation;

