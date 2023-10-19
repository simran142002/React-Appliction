import React, { useState } from "react";
import Modal from "react-modal"; 
import DashboardOneModal from "modals/DashboardOne";
import { Img, Input, Line, Text } from "components";

const DashboardTwoModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSave = () => {
    const profile = {name, email, phone};
    if (props.onSave) {
      props.onSave(profile);
    }
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal isOpen={true}
      onRequestClose={props.onRequestClose}
      appElement={document.getElementById("root")}
      className="m-auto"
      overlayClassName="bg-black-900_7f fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start pb-[114px] md:px-5 rounded-[16px] w-full">
          <div className="flex flex-col gap-4 h-16 md:h-auto items-center justify-between pt-4 w-[544px] sm:w-full">
            <div className="flex flex-row gap-3 items-center justify-between sm:px-5 px-6 w-full">
              <Text
                className="flex-1 text-gray-900 text-xl w-full"
                size="txtFigtreeSemiBold20"
              >
                Add New Profile
              </Text>
              <Img
                className="common-pointer h-8 rounded-lg w-8"
                src="images/img_close.svg"
                alt="close"
                onClick={props.onRequestClose}
              />
            </div>
            <Line className="bg-gray-100_01 h-px w-full" />
          </div>
          <div className="flex flex-col gap-6 h-[376px] md:h-auto items-start justify-start p-6 sm:px-5 w-[544px] sm:w-full">
            <div className="flex flex-col items-center justify-start pt-[3px] w-[97%] md:w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                <div className="flex flex-row items-center justify-between w-[66%] md:w-full">
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
                    Contact
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-[53px] items-center justify-between w-full">
                  <Line className="bg-blue-A200_01 h-1 rounded-[1px] w-[45%]" />
                  <Line className="bg-blue_gray-100 h-1 rounded-[1px] w-[45%]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-[496px] sm:w-full">
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtFigtreeRegular16"
                >
                  Enter Name*
                </Text>
                <Input
                  name="inputcontainer"
                  placeholder="Eg. John Doe"
                  value={name || ""}
                  onChange={(e) => setName(e)}
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-gray-100_01 border-solid rounded-lg w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-base text-black-900 w-full"
                size="txtFigtreeRegular16Black900"
              >
                Enter Email*
              </Text>
              <Input
                  name="inputcontainer"
                  placeholder="Eg. John Doe"
                  value={email || ""}
                  onChange={(e) => setEmail(e)}
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-gray-100_01 border-solid rounded-lg w-full"
                />
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-base text-black-900 w-full"
                size="txtFigtreeRegular16Black900"
              >
                Enter Phone*
              </Text>
              <Input
                  name="inputcontainer"
                  placeholder="Eg. John Doe"
                  value={phone || ""}
                  onChange={(e) => setPhone(e)}
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-gray-100_01 border-solid rounded-lg w-full"
                />
              <div className="bg-cover bg-no-repeat flex flex-col font-montserrat h-[43px] items-center justify-start mt-[21px] p-[11px] w-full"
                    style={{
                      backgroundImage: "url('images/img_buttonsignin.svg')",
                    }}
                  >
                  <a href="javascript:"
                      className="text-base text-center text-white-A700"
                    >
                      <Text size="txtMontserratBold16" onClick={openModal}  onSave={handleSave({name, email, phone})} onRequestClose={props.onRequestClose}>Next</Text>
                    </a>
                  </div>
                  {isModalOpen && (
        <DashboardOneModal onRequestClose={closeModal} />
      )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DashboardTwoModal;
