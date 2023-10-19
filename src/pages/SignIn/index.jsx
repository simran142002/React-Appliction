import React from "react";

import { useGoogleLogin } from "@react-oauth/google";
import { signIn } from "next-auth/react"
import { Img, Input, Text } from "components";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: async (res) => {
      try {
        const result = await signIn("google", {
          accessToken: res.access_token,
        });

        // Check if the result is defined and has an 'error' property
        if (result && result.error) {
          console.error("Sign-in failed:", result.error);
        } else {
          console.log("res", res);
          alert("Login successful. 😍");

          // Redirect to the home page after successful login
          navigate("/");
        }
      } catch (error) {
        console.error("Error during sign-in:", error);
      }
      navigate("/");
    },
  });

  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[94px] items-center justify-start md:px-5 w-[86%] md:w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[371px] h-[1024px] justify-start p-14 md:px-10 sm:px-5 w-[59%] md:w-full"
            style={{ backgroundImage: "url('images/img_group15.png')" }}
          >
            <Text
              className="ml-4 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.36px]"
              size="txtPoppinsBold24"
            >
              LOGO
            </Text>
            <div className="flex flex-col font-montserrat md:gap-10 gap-[357px] items-center justify-start mb-2.5 md:ml-[0] ml-[88px] mr-[220px] w-1/2 md:w-full">
              <Text
                className="md:text-5xl text-7xl text-white-A700"
                size="txtMontserratBold72"
              >
                Board.
              </Text>
              <div className="flex flex-row items-center justify-between w-[299px]">
                <Img
                  className="h-11 w-11"
                  src="images/img_volume.svg"
                  alt="volume"
                />
                <Img
                  className="h-[41px] w-[42px]"
                  src="images/img_vector.svg"
                  alt="vector"
                />
                <Img
                  className="h-12 w-12"
                  src="images/img_carbonlogolinkedin.svg"
                  alt="carbonlogolinke"
                />
                <Img
                  className="h-12 w-[50px]"
                  src="images/img_carbonlogodiscord.svg"
                  alt="carbonlogodisco"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[35%] md:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtMontserratBold36"
            >
              Sign In
            </Text>
            <Text
              className="mt-2 text-base text-black-900"
              size="txtLatoRegular16"
            >
              Sign in to your account
            </Text>
            <div className="flex sm:flex-col flex-row font-montserrat gap-7 items-center justify-between mt-[27px] w-full">
              <div
                className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-8 items-center justify-end p-1.5 w-[47%] sm:w-full"
                style={{ backgroundImage: "url('images/img_searchbar.svg')" }}
              >
                <div
                  className="common-pointer flex flex-row gap-[17px] items-start justify-start w-[82%] md:w-full"
                  onClick={() => googleSignIn()}
                >
                  <Img
                    className="h-[15px] w-[15px]"
                    src="images/img_googleicon1.svg"
                    alt="googleiconOne"
                  />
                  <Text
                    className="mt-0.5 text-center text-gray-600 text-xs"
                    size="txtMontserratRegular12"
                  >
                    Sign in with Google
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-8 items-center justify-end p-1.5 w-[47%] sm:w-full"
                style={{ backgroundImage: "url('images/img_searchbar.svg')" }}
              >
                <div className="flex flex-row gap-[17px] items-start justify-center w-[76%] md:w-full">
                  <Img
                    className="h-[15px] mb-0.5"
                    src="images/img_volume_gray_500_01.svg"
                    alt="volume_One"
                  />
                  <Text
                    className="mt-[3px] text-center text-gray-600 text-xs"
                    size="txtMontserratRegular12"
                  >
                    Sign in with Apple
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-lato gap-6 items-center justify-start mt-[27px] w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[347px] items-center justify-end p-8 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_searchbar.svg')" }}
              >
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtLatoRegular16"
                  >
                    Email address
                  </Text>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[43px] items-start justify-end mt-[11px] p-[11px] w-full"
                    style={{ backgroundImage: "url('images/img_group17.svg')" }}
                  >
                    <Text
                      className="ml-1 md:ml-[0] text-base text-black-900"
                      size="txtLatoRegular16"
                    >
                      johndoe@gmail.com
                    </Text>
                  </div>
                  <Text
                    className="mt-[22px] text-base text-black-900"
                    size="txtLatoRegular16"
                  >
                    Password
                  </Text>
                  <Input
                    name="groupFourteen"
                    placeholder="••••••••"
                    className="leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                    wrapClassName="mt-[11px] w-full"
                    color="gray_200"
                    size="xs"
                  ></Input>
                  <a
                    href="javascript:"
                    className="mt-[23px] text-base text-blue-700"
                  >
                    <Text size="txtLatoRegular16Blue700">Forgot password?</Text>
                  </a>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col font-montserrat h-[43px] items-center justify-start mt-[21px] p-[11px] w-full"
                    style={{
                      backgroundImage: "url('images/img_buttonsignin.svg')",
                    }}
                  >
                    <a
                      href="javascript:"
                      className="text-base text-center text-white-A700"
                    >
                      <Text size="txtMontserratBold16">Sign In</Text>
                    </a>
                  </div>
                </div>
              </div>
              <Text
                className="text-base text-center text-gray-600"
                size="txtLatoRegular16Gray600"
              >
                <span className="text-gray-600 font-lato font-normal">
                  Don’t have an account?{" "}
                </span>
                <span className="text-blue-700 font-lato font-normal">
                  Register here
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
