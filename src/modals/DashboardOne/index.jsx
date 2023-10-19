import React, { useState } from "react";
import { default as ModalProvider } from "react-modal";
import Modal from "react-modal"; 
import { Button, Img, Input, Line, Text } from "components";
import { useNavigate } from "react-router-dom";

const DashboardOneModal = (props) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const submitModal = () => {
    navigate("/dashboardthree");
  }
  return (
    <Modal isOpen={true}
      onRequestClose={props.onRequestClose}
      appElement={document.getElementById("root")}
      className="m-auto !w-[38%]"
      overlayClassName="bg-black-900_7f fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col h-[463px] md:h-auto items-start justify-start md:px-5 rounded-[16px] w-[544px] sm:w-full">
          <div className="flex flex-col gap-4 h-16 md:h-auto items-center justify-between pt-4 w-full">
            <div className="flex flex-row gap-3 items-center justify-between sm:px-5 px-6 w-full">
              <Text
                className="flex-1 text-gray-900 text-xl w-full"
                size="txtFigtreeSemiBold20"
              >
                Add New Profile
              </Text>
              <div className="flex flex-col items-center justify-start p-1 rounded-lg w-8">
                <Img
                  className="common-pointer h-6 w-6"
                  src="images/img_close_gray_500.svg"
                  alt="close"
                  onClick={props.onRequestClose}
                />
              </div>
            </div>
            <Line className="bg-gray-100_01 h-px w-full" />
          </div>
          <div className="flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start pt-[3px] w-[97%] md:w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                <div className="flex flex-row items-center justify-between w-[65%] md:w-full">
                  <Text
                    className="text-base text-gray-900"
                    size="txtFigtreeSemiBold16Gray900"
                  >
                    Basic
                  </Text>
                  <Text
                    className="text-base text-gray-900"
                    size="txtFigtreeSemiBold16Gray900"
                  >
                    Social
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-[53px] items-center justify-between w-full">
                  <Line className="bg-blue_gray-100 h-1 rounded-[1px] w-[45%]" />
                  <Line className="bg-blue-A200_01 h-1 rounded-[1px] w-[45%]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-[496px] sm:w-full">
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtFigtreeRegular16"
                >
                  <span className="text-gray-900 font-figtree text-left font-normal">
                    Instagram Link{" "}
                  </span>
                  <span className="text-gray-500 font-figtree text-left font-normal">
                    (Optional){" "}
                  </span>
                </Text>
                <Input
                  name="inputcontainer"
                  placeholder="Eg. ..instagram.com/username"
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-gray-100_01 border-solid rounded-lg w-full"
                  type="text"
                ></Input>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[496px] sm:w-full">
              <Text
                className="text-base text-gray-900 w-full"
                size="txtFigtreeRegular16"
              >
                <span className="text-gray-900 font-figtree text-left font-normal">
                  Youtube Link{" "}
                </span>
                <span className="text-gray-500 font-figtree text-left font-normal">
                  (Optional)
                </span>
              </Text>
            </div>
            <Input
              name="inputcontainer_One"
              placeholder="Eg. ..youtebe/username"
              className="p-0 placeholder:text-gray-500 text-base text-left w-full"
              wrapClassName="border border-gray-100_01 border-solid rounded-lg w-full"
              type="text"
            ></Input>
            {/* <div className="bg-cover bg-no-repeat flex flex-col font-montserrat h-[43px] items-center justify-start mt-[21px] p-[11px]"
              style={{
               backgroundImage: "url('images/img_buttonsignin.svg')",
              }}>              
                <a href="javascript:"
                      className="text-base text-center text-white-A700"
                    >
                      <Text size="txtMontserratBold16" onClick={props.onRequestClose}>Back</Text>
                    </a>
              </div> */}
              <div className="flex flex-row items-center justify-between w-[65%] md:w-full">
              <Button
                  className="bg-blue-500 flex flex-col font-montserrat h-[33px] items-center justify-center mt-[21px] p-[11px] text-base text-center text-white-A700 rounded-lg w-[45%]"
                  variant="primary"
                  size="txtMontserratBold16"
                  onClick={props.onRequestClose}
                >
                  Back
                </Button>
                <Button
                  className="bg-blue-500 flex flex-col font-montserrat h-[33px] items-center justify-center mt-[21px] p-[11px] text-base text-center text-white-A700 rounded-lg w-[45%]"
                  size="txtMontserratBold16"
                  onClick={submitModal}
                >
                    Done
                  </Button>
                </div>
              {/* <div className="bg-cover bg-no-repeat flex flex-col font-montserrat h-[43px] items-center justify-start mt-[21px] p-[11px]"
              style={{
               backgroundImage: "url('images/img_buttonsignin.svg')",
              }}>
                <a href="javascript:"
                      className="text-base text-center text-white-A700"
                    >
                      <Text size="txtMontserratBold16" onClick={submitModal}>Done</Text>
                </a>
              </div>   */}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DashboardOneModal;
