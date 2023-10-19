import React, { useEffect, useState }  from "react";
// import { Menu, MenuItem } from "react-pro-sidebar";
import { Doughnut } from 'react-chartjs-2';
import { useNavigate } from "react-router-dom";
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import DashboardTwoModal from "modals/DashboardTwo";
import { Button, Img, List, Text } from "components";
// import Sidebar1 from "components/Sidebar1";
import SignInNavigation from "components/Sidebar1";
import { Line } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';
import axios from "axios";

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        Chart.register(CategoryScale);
        // Fetch data from the public JSON file
        const response = await axios.get("http://localhost:3001/api/data");
        const data = response.data;
        console.log(data);

        if (!Array.isArray(data) || data.length === 0) {
          console.log("Invalid data format or empty data array.");
        }

        // Process the data and set it to the state
        const processedData = {
          labels: data.map((item) => item.label),
          datasets: [
            {
              label: "Data 1",
              data: data.map((item) => item.data1),
              borderColor: "rgba(255, 99, 132, 1)",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
            },
            {
              label: "Data 2",
              data: data.map((item) => item.data2),
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
            // Add more datasets as needed
          ],
        };

        setChartData(processedData);
      } catch (error) {
        console.log("Error fetching or processing data:", error.message);
      }
    };

    fetchData();
  }, [])

  const openModal = () => {
    setIsModalOpen(true);
    console.log("check");
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        <SignInNavigation className="bg-gradient  flex md:flex-1 flex-col items-start justify-center p-[50px] md:px-10 sm:px-5 rounded-[20px] w-[21%] md:w-full"/>
          <div className="flex flex-1 flex-col items-center justify-start w-full">
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
            <div className="flex flex-col font-figtree mt-9 relative w-full">
              <List
                className="sm:flex-col flex-row gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[1000px] mx-auto w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[120px] items-center justify-end p-4 shadow-bs w-full"
                    style={{
                      backgroundImage: "url('images/img_totalrevenues.svg')",
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
                      backgroundImage: "url('images/img_totalrevenues.svg')",
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
                      backgroundImage: "url('images/img_totalrevenues.svg')",
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
                      backgroundImage: "url('images/img_totalrevenues.svg')",
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
              <div className="font-lato md:h-[1493px] sm:h-[341px] h-[418px] mt-[-18.5px] mx-auto w-full z-[1]">
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[0] flex md:flex-col flex-row md:gap-5 h-[359px] inset-x-[0] items-start justify-start mx-auto p-[25px] sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group5.svg')" }}
                >
                  <div className="flex flex-col ml-3.5 md:ml-[0] md:mt-0 mt-[3px] relative w-[97%] md:w-full">
                    <div className="flex flex-col items-center justify-start mx-auto w-full">
                      <div className="flex flex-col gap-[39px] items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[98%] md:w-full">
                          <Text
                            className="mb-[15px] text-black-900 text-lg"
                            size="txtMontserratBold18"
                          >
                            Activities
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[679px] md:mt-0 mt-5 text-black-900 text-sm"
                            size="txtLatoRegular14Black900"
                          >
                            Guest
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[60px] md:mt-0 mt-5 text-black-900 text-sm"
                            size="txtLatoRegular14Black900"
                          >
                            User
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row md:gap-5 h-max inset-[0] items-end justify-center m-auto w-3/4">
                        <div className="md:h-[1286px] h-[212px] sm:h-[322px] relative w-full">
                        {chartData.labels.length > 0 && (
                          <Bar
                            data={chartData}
                            options={{
                              // Your chart options...
                            }}
                          />
                        )}
                        </div>
                      </div>
                        {/* <div className="md:h-[1286px] h-[212px] sm:h-[322px] relative w-full">
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
                          <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-[0] items-end justify-center m-auto w-3/4">
                            <Img
                              className="h-[195px] rounded"
                              src="images/img_bar11.svg"
                              alt="barEleven"
                            />
                            <Img
                              className="h-[156px] md:ml-[0] ml-[9px] md:mt-0 mt-10 rounded"
                              src="images/img_bar11_red_a100.svg"
                              alt="barEleven_One"
                            />3
                            <Img
                              className="h-[137px] md:ml-[0] ml-[110px] md:mt-0 mt-[57px] rounded"
                              src="images/img_bar11.svg"
                              alt="barEleven_Two"
                            />
                            <Img
                              className="h-[175px] md:ml-[0] ml-[9px] md:mt-0 mt-[21px] rounded"
                              src="images/img_bar11_red_a100.svg"
                              alt="barEleven_Three"
                            />
                            <Img
                              className="h-[76px] ml-28 md:ml-[0] md:mt-0 mt-[118px] rounded"
                              src="images/img_computer_green_200.svg"
                              alt="computer"
                            />
                            <Img
                              className="h-[117px] md:ml-[0] ml-[9px] md:mt-0 mt-[79px] rounded"
                              src="images/img_bar11_red_a100.svg"
                              alt="barEleven_Four"
                            />
                            <Img
                              className="h-[157px] md:ml-[0] ml-[113px] md:mt-0 mt-[38px] rounded"
                              src="images/img_bar11.svg"
                              alt="barEleven_Five"
                            />
                            <Img
                              className="h-[133px] md:ml-[0] ml-[9px] md:mt-0 mt-[62px] rounded"
                              src="images/img_bar11_red_a100.svg"
                              alt="barEleven_Six"
                            />
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between ml-auto mr-[66px] mt-[-NaNpx] w-[12%] z-[1]">
                      <div className="bg-red-200_01 h-2.5 rounded-[50%] w-2.5"></div>
                      <div className="bg-light_green-300 h-2.5 rounded-[50%] w-2.5"></div>
                    </div>

                  </div>
                  <Img
                    className="h-[5px] ml-1 md:ml-[0] md:mt-0 mt-[159px] w-[5px]"
                    src="images/img_vector_gray_600.svg"
                    alt="vector"
                  />
                </div>
                <div className="absolute flex flex-col font-montserrat md:gap-10 gap-[114px] justify-start left-[4%] top-[0] w-[13%]">
                  <Img
                    className="h-[3px] md:ml-[0] ml-[116px]"
                    src="images/img_vector_gray_600_3x8.svg"
                    alt="vector_One"
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
            <div className="flex md:flex-col flex-row font-montserrat md:gap-10 items-center justify-between mt-[38px] w-full">
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-64 items-start justify-start p-[31px] sm:px-5 w-[48%] md:w-full"
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
              <div className="bg-white-A700 flex md:flex-1 flex-col font-figtree items-center justify-start outline outline-[2px] outline-gray-300 p-[69px] md:px-10 sm:px-5 rounded-[20px] shadow-bs1 w-[48%] md:w-full">
                <div className="flex flex-col gap-4 h-[116px] md:h-auto items-center justify-center w-[82px]" onClick={openModal}>
                  <div
                    className="common-pointer bg-gray-100 border border-gray-100_01 border-solid flex flex-col h-[76px] items-center justify-end p-3 rounded-[50%] w-[76px]"
                  >
                    <Img
                      className="h-[51px] w-[51px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtFigtreeSemiBold16"
                  >
                    Add Profile
                  </Text>
                </div>
                {isModalOpen && (
        <DashboardTwoModal onRequestClose={closeModal} />
      )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
