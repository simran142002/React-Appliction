import React, { useState, useEffect } from "react";
import DashboardTwoModal from "modals/DashboardTwo";
import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
// import Sidebar1 from "components/Sidebar1";
import SignInNavigation from "components/Sidebar1";
const DashboardThreePage = () => {
  const [profiles, setProfiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  // Function to update the profile state
  const handleSave = (newProfile) => {
    console.log(newProfile);
    setProfile(newProfile);
  };

  useEffect(() => {
    console.log(profile);
    if (profile) {
      setShowModal(false);
    }
  }, [profile]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addProfile = (profile) => {
    console.log(profile);
    setProfiles([...profiles, profile]);
    closeModal(); // Close the modal after saving
  };
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[18px] mt-0.5 w-[18px]"
          src="images/img_clock.svg"
          alt="clock"
        />
      ),
      label: "Dashboard",
      href: "/",
      active: window.location.pathname === "/",
    },
    {
      icon: <Img className="h-5" src="images/img_offer.svg" alt="offer" />,
      label: "Transactions",
    },
    {
      icon: (
        <Img
          className="h-[18px] mt-0.5 w-[18px]"
          src="images/img_calendar.svg"
          alt="calendar"
        />
      ),
      label: "Schedules",
    },
    {
      icon: (
        <Img
          className="h-[18px] mt-0.5 w-[18px]"
          src="images/img_share.svg"
          alt="share"
        />
      ),
      label: "Users",
    },
    {
      icon: (
        <Img
          className="h-[18px] w-[17px]"
          src="images/img_settings.svg"
          alt="settings"
        />
      ),
      label: "Settings",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-start mx-auto p-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
        <SignInNavigation className="bg-gradient  flex md:flex-1 flex-col items-start justify-center p-[50px] md:px-10 sm:px-5 rounded-[20px] w-[21%] md:w-full"  />
          <div className="flex flex-1 flex-col gap-[37px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtMontserratBold24"
              >
                Dashboard
              </Text>
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col font-lato h-8 items-start justify-start md:ml-[0] ml-[575px] p-1.5 w-1/5 md:w-full"
                style={{ backgroundImage: "url('images/img_searchbar.svg')" }}
              >
                <div className="flex flex-row gap-[86px] items-center justify-start mb-[3px] ml-2 md:ml-[0] w-[82%] md:w-full">
                  <Text
                    className="text-gray-400 text-sm"
                    size="txtLatoRegular14"
                  >
                    Search...
                  </Text>
                  <Img
                    className="h-3 w-3"
                    src="images/img_search.svg"
                    alt="search_One"
                  />
                </div>
              </div>
              <Img
                className="h-5 md:ml-[0] ml-[13px] md:mt-0 mt-[7px]"
                src="images/img_notification.svg"
                alt="notification"
              />
              <div className="flex flex-col h-[30px] items-center justify-start md:ml-[0] ml-[27px] w-[30px]">
                <Img
                  className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
              </div>
            </div>
            <div className="font-figtree md:h-[496px] sm:h-[515px] h-[814px] relative w-full">
              <div className="flex flex-col m-auto w-full">
                <div className="flex flex-col mx-auto w-full">
                  <List
                    className="sm:flex-col flex-row gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[1000px] mx-auto w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[120px] items-center justify-end p-4 shadow-bs w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_totalrevenues.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-2 items-start justify-start w-[93%] md:w-full">
                          <Button
                            className="flex h-[31px] items-center justify-center rounded-[15px] w-[31px]"
                            color="green_300"
                          >
                            <Img src="images/img_computer.svg" alt="computer" />
                          </Button>
                          <div className="flex flex-row gap-[18px] items-end justify-between w-[189px]">
                            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                              <Text
                                className="text-[11px] text-black-900 w-auto"
                                size="txtLatoRegular11"
                              >
                                Total Revenues
                              </Text>
                              <Text
                                className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900 w-auto"
                                size="txtOpenSansBold21"
                              >
                                $2,129,430
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-semibold min-w-[47px] text-[10px] text-center tracking-[0.50px] uppercase"
                              shape="round"
                            >
                              +2.5%
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[120px] items-center justify-end p-4 shadow-bs w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_totalrevenues.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-2 items-start justify-start mt-0.5 w-[93%] md:w-full">
                          <Button
                            className="flex h-[31px] items-center justify-center rounded-[15px] w-[31px]"
                            color="orange_200"
                          >
                            <Img
                              src="images/img_offer_white_a700.svg"
                              alt="offer"
                            />
                          </Button>
                          <div className="flex flex-row gap-[18px] items-end justify-start w-auto">
                            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                              <Text
                                className="text-[11px] text-black-900 w-auto"
                                size="txtLatoRegular11"
                              >
                                Total Transactions
                              </Text>
                              <Text
                                className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900 w-auto"
                                size="txtOpenSansBold21"
                              >
                                1,520
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-semibold min-w-[47px] text-[10px] text-center tracking-[0.50px] uppercase"
                              shape="round"
                            >
                              +1.7%
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[120px] items-center justify-end p-[11px] shadow-bs w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_totalrevenues.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-[9px] items-start justify-start mt-[5px] w-[89%] md:w-full">
                          <Button
                            className="flex h-[31px] items-center justify-center rounded-[15px] w-[31px]"
                            color="red_200"
                          >
                            <Img src="images/img_ticket.svg" alt="ticket" />
                          </Button>
                          <div className="flex flex-row gap-[19px] items-end justify-start w-auto">
                            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                              <Text
                                className="text-[11px] text-black-900 w-auto"
                                size="txtLatoRegular11"
                              >
                                Total Likes
                              </Text>
                              <Text
                                className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                                size="txtOpenSansBold24"
                              >
                                9,721
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-semibold min-w-[47px] text-[10px] text-center tracking-[0.50px] uppercase"
                              shape="round"
                            >
                              +1.4%
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[120px] items-center justify-end p-[11px] shadow-bs w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_totalrevenues.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-2 items-start justify-start mt-1.5 w-[89%] md:w-full">
                          <Button
                            className="flex h-[31px] items-center justify-center rounded-[15px] w-[31px]"
                            color="indigo_200"
                          >
                            <Img src="images/img_user.svg" alt="user" />
                          </Button>
                          <div className="flex flex-row gap-[19px] items-end justify-start w-auto">
                            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                              <Text
                                className="text-[11px] text-black-900 w-auto"
                                size="txtLatoRegular11"
                              >
                                Total Users
                              </Text>
                              <Text
                                className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                                size="txtOpenSansBold24"
                              >
                                9,721
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-semibold min-w-[47px] text-[10px] text-center tracking-[0.50px] uppercase"
                              shape="round"
                            >
                              +4.2%
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="font-lato h-[418px] sm:h-[448px] md:h-[496px] mt-[-18.5px] mx-auto w-full z-[1]">
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[359px] inset-x-[0] items-center justify-start mx-auto p-7 sm:px-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_group5.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[39px] items-center justify-start mb-3 w-[98%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[98%] md:w-full">
                          <Text
                            className="mb-[15px] text-black-900 text-lg"
                            size="txtMontserratBold18"
                          >
                            Activities
                          </Text>
                          <div className="bg-red-200_01 h-2.5 mb-0.5 md:ml-[0] ml-[658px] md:mt-0 mt-[25px] rounded-[50%] w-2.5"></div>
                          <Text
                            className="ml-2.5 md:ml-[0] md:mt-0 mt-5 text-black-900 text-sm"
                            size="txtLatoRegular14Black900"
                          >
                            Guest
                          </Text>
                          <div className="bg-light_green-300 h-2.5 mb-0.5 md:ml-[0] ml-[39px] md:mt-0 mt-[25px] rounded-[50%] w-2.5"></div>
                          <Text
                            className="md:ml-[0] ml-[11px] md:mt-0 mt-5 text-black-900 text-sm"
                            size="txtLatoRegular14Black900"
                          >
                            User
                          </Text>
                        </div>
                        <div className="h-[212px] md:h-[232px] sm:h-[322px] relative w-full">
                          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                              <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                                <Text
                                  className="text-gray-600 text-sm"
                                  size="txtLatoRegular14Gray600"
                                >
                                  500
                                </Text>
                                <Line className="bg-gray-200 h-px mb-1.5 sm:mt-0 mt-[9px] w-[96%]" />
                              </div>
                              <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                                <Text
                                  className="text-gray-600 text-sm"
                                  size="txtLatoRegular14Gray600"
                                >
                                  400
                                </Text>
                                <Line className="bg-gray-200 h-px mb-1.5 sm:mt-0 mt-[9px] w-[96%]" />
                              </div>
                              <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                                <Text
                                  className="text-gray-600 text-sm"
                                  size="txtLatoRegular14Gray600"
                                >
                                  300
                                </Text>
                                <Line className="bg-gray-200 h-px mb-1.5 sm:mt-0 mt-[9px] w-[96%]" />
                              </div>
                              <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                                <Text
                                  className="text-gray-600 text-sm"
                                  size="txtLatoRegular14Gray600"
                                >
                                  200
                                </Text>
                                <Line className="bg-gray-200 h-px mb-1.5 sm:mt-0 mt-[9px] w-[96%]" />
                              </div>
                              <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                                <Text
                                  className="text-gray-600 text-sm"
                                  size="txtLatoRegular14Gray600"
                                >
                                  100
                                </Text>
                                <Line className="bg-gray-200 h-px mb-1.5 sm:mt-0 mt-[9px] w-[96%]" />
                              </div>
                              <div className="flex md:flex-col flex-row gap-[13px] items-center justify-between w-[99%] md:w-full">
                                <Text
                                  className="text-gray-600 text-sm"
                                  size="txtLatoRegular14Gray600"
                                >
                                  0
                                </Text>
                                <Line className="bg-gray-200 h-px mb-1.5 md:mt-0 mt-[9px] w-[98%]" />
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-row h-max inset-y-[0] items-end justify-start left-[13%] my-auto w-[31%]">
                            <Img
                              className="h-[195px] rounded"
                              src="images/img_bar11.svg"
                              alt="barEleven"
                            />
                            <Img
                              className="h-[156px] ml-[9px] mt-10 rounded"
                              src="images/img_bar11_red_a100.svg"
                              alt="barEleven_One"
                            />
                            <Img
                              className="h-[137px] ml-[110px] mt-[57px] rounded"
                              src="images/img_bar11.svg"
                              alt="barEleven_Two"
                            />
                            <Img
                              className="h-[175px] ml-[9px] mt-[21px] rounded"
                              src="images/img_bar11_red_a100.svg"
                              alt="barEleven_Three"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col font-montserrat md:gap-10 gap-[114px] justify-start left-[4%] top-[0] w-[13%]">
                      <Img
                        className="h-[3px] md:ml-[0] ml-[116px]"
                        src="images/img_vector_gray_600_3x8.svg"
                        alt="vector"
                      />
                      <Text
                        className="mr-3.5 text-gray-600 text-sm"
                        size="txtMontserratRegular14"
                      >
                        May - June 2021
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col font-montserrat h-64 items-start justify-start mt-[-NaNpx] p-[31px] sm:px-5 w-[48%] z-[1]"
                  style={{ backgroundImage: "url('images/img_group5.svg')" }}
                >
                  <div className="flex flex-col gap-[18px] items-center justify-start ml-2 md:ml-[0] w-[91%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-black-900 text-lg"
                        size="txtMontserratBold18"
                      >
                        Top products
                      </Text>
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-gray-600 text-xs"
                          size="txtMontserratRegular12"
                        >
                          May - June 2021
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                      <Img
                        className="h-[141px] w-[141px]"
                        src="images/img_group7540.svg"
                        alt="group7540"
                      />
                      <div className="flex flex-col gap-5 items-start justify-start">
                        <div className="flex flex-col items-center justify-start w-[59%] md:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <div className="flex flex-row font-montserrat gap-2.5 items-center justify-start w-full">
                              <div className="bg-green-200 h-[11px] my-[3px] rounded-[5px] w-[11px]"></div>
                              <Text
                                className="text-black-900 text-sm"
                                size="txtMontserratBold14"
                              >
                                Basic Tees
                              </Text>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[21px] mt-1 text-gray-600 text-xs"
                              size="txtLatoRegular12"
                            >
                              55%
                            </Text>
                          </div>
                        </div>
                        <List
                          className="flex flex-col gap-5 items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-col items-center justify-start w-full">
                            <div className="flex flex-col justify-start w-full">
                              <div className="flex flex-row font-montserrat gap-2.5 items-start justify-start w-full">
                                <div className="bg-amber-200 h-[11px] my-[3px] rounded-[5px] w-[11px]"></div>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtMontserratBold14"
                                >
                                  Custom Short Pants
                                </Text>
                              </div>
                              <Text
                                className="md:ml-[0] ml-[21px] mt-1 text-gray-600 text-xs"
                                size="txtLatoRegular12"
                              >
                                31%
                              </Text>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col items-center justify-start w-[77%] md:w-full">
                            <div className="flex flex-col justify-start w-full">
                              <div className="flex flex-row font-montserrat gap-2.5 items-start justify-start w-full">
                                <div className="bg-red-A100 h-[11px] my-[3px] rounded-[5px] w-[11px]"></div>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtMontserratBold14"
                                >
                                  Super Hoodies
                                </Text>
                              </div>
                              <Text
                                className="md:ml-[0] ml-[21px] mt-[3px] text-gray-600 text-xs"
                                size="txtLatoRegular12"
                              >
                                14%
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-figtree items-center justify-start ml-auto mt-[-174.38px] w-[48%] z-[1]">
                {isModalOpen && (
                  <DashboardTwoModal
                    onRequestClose = {closeModal}
                    onSave = {addProfile} // Pass the addProfile function to save the profile
                  />
                )}
                  <div className="flex flex-col justify-start w-full">
                    <Img
                      className="h-[5px] md:ml-[0] ml-[445px] w-[5px]"
                      src="images/img_vector_gray_600.svg"
                      alt="vector_One"
                    />
                    <div className="flex flex-row gap-2.5 items-end justify-start md:ml-[0] ml-[39px] mt-[3px] w-[18%] md:w-full">
                      <Img
                        className="h-[76px] mt-[39px] rounded"
                        src="images/img_computer_green_200.svg"
                        alt="computer"
                      />
                      <Img
                        className="h-[117px] rounded"
                        src="images/img_bar11_red_a100.svg"
                        alt="barEleven_Four"
                      />
                    </div>
                    <ul>
                      {profiles.map((profile, index) => (
                        <li key={index}>{JSON.stringify(profile)}</li>
                      ))}
                    </ul>
                    {profile && (
        <div className="flex flex-col items-start justify-start mb-[9px] mt-1.5 w-[91%] md:w-full">
          {/* Display profile details using the state variables */}
          <div className="bg-cover bg-no-repeat flex flex-col h-64 items-start justify-start mt-[87px] p-[39px] sm:px-5 w-full"
          style={{
            backgroundImage: "url('images/img_group5.svg')",
          }}>
                      <div className="flex flex-col items-start justify-start mb-[9px] mt-1.5 w-[91%] md:w-full">
                        <div className="flex flex-col items-start justify-center ml-0.5 md:ml-[0] w-auto">
                          <div className="flex flex-col items-start justify-center w-auto">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                              size="txtFigtreeSemiBold24"
                            >
                              Simran
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-[55px] w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Img
                              className="h-7 rounded-[50%] w-7"
                              src="images/img_button.svg"
                              alt="button"
                            />
                            <Text
                              className="text-gray-900 text-sm underline w-auto"
                              size="txtFigtreeRegular14"
                            >
                              9999
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Img
                              className="h-7 rounded-[50%] w-7"
                              src="images/img_button_red_50.svg"
                              alt="button_One"
                            />
                            <Text
                              className="text-gray-900 text-sm underline w-auto"
                              size="txtFigtreeRegular14"
                            >
                              sim
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-[22px] w-full">
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Button
                              className="flex h-7 items-center justify-center w-7"
                              shape="circle"
                              color="deep_purple_50"
                              size="xs"
                            >
                              <Img
                                className="h-6"
                                src="images/img_mail.svg"
                                alt="mail"
                              />
                            </Button>
                            <Text
                              className="text-gray-900 text-sm underline w-auto"
                              size="txtFigtreeRegular14"
                            >
                              john@xyz.com
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3 items-start justify-start w-auto">
                            <div className="bg-deep_orange-50 flex flex-col h-7 items-center justify-start p-1 rounded-[50%] w-7">
                              <div className="flex flex-col h-5 items-center justify-start w-5">
                                <Img
                                  className="h-[17px] w-[17px]"
                                  src="images/img_clock_red_a700.svg"
                                  alt="clock_One"
                                />
                              </div>
                            </div>
                            <Text
                              className="text-gray-900 text-sm underline w-auto"
                              size="txtFigtreeRegular14"
                            >
                              john_official
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>

        </div>
      )}
      <Button onClick={() => setShowModal(true)}>
        Open DashboardTwoModal
      </Button>
      {showModal && (
        <DashboardTwoModal
          onSave={handleSave}
          onRequestClose={() => setShowModal(false)}
        />
      )}
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-[67%]">
                <div className="flex flex-row gap-2.5 items-end justify-end md:ml-[0] ml-[580px] w-[13%] md:w-full">
                  <Img
                    className="h-[157px] rounded"
                    src="images/img_bar11.svg"
                    alt="barEleven_Five"
                  />
                  <Img
                    className="h-[133px] mt-6 rounded"
                    src="images/img_bar11_red_a100.svg"
                    alt="barEleven_Six"
                  />
                </div>
                <div className="flex flex-row sm:gap-10 items-start justify-between mr-[19px] mt-[3px] w-[98%] md:w-full">
                  <Text
                    className="text-gray-600 text-sm"
                    size="txtLatoRegular14Gray600"
                  >
                    Week 1
                  </Text>
                  <Text className="text-gray-600 text-sm" size="txtOpenSans14">
                    Week 2
                  </Text>
                  <Text className="text-gray-600 text-sm" size="txtOpenSans14">
                    Week 3
                  </Text>
                  <Text className="text-gray-600 text-sm" size="txtOpenSans14">
                    Week 4
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardThreePage;
