import React from "react";

const sizeClasses = {
  txtMontserratBold16: "font-bold font-montserrat",
  txtMontserratBold14: "font-bold font-montserrat",
  txtMontserratBold36: "font-bold font-montserrat",
  txtLatoRegular14Gray600: "font-lato font-normal",
  txtLatoRegular16Gray600: "font-lato font-normal",
  txtMontserratBold18WhiteA700: "font-bold font-montserrat",
  txtFigtreeRegular14: "font-figtree font-normal",
  txtOpenSansBold24: "font-bold font-opensans",
  txtFigtreeRegular16: "font-figtree font-normal",
  txtLatoRegular14Black900: "font-lato font-normal",
  txtOpenSansBold21: "font-bold font-opensans",
  txtMontserratBold18: "font-bold font-montserrat",
  txtMontserratRegular18: "font-montserrat font-normal",
  txtFigtreeSemiBold20: "font-figtree font-semibold",
  txtFigtreeSemiBold16Gray900: "font-figtree font-semibold",
  txtLatoRegular14: "font-lato font-normal",
  txtMontserratRegular14: "font-montserrat font-normal",
  txtLatoRegular16Blue700: "font-lato font-normal",
  txtMontserratRegular12: "font-montserrat font-normal",
  txtLatoRegular12: "font-lato font-normal",
  txtFigtreeSemiBold24: "font-figtree font-semibold",
  txtLatoRegular11: "font-lato font-normal",
  txtMontserratBold36WhiteA700: "font-bold font-montserrat",
  txtFigtreeRegular16Black900: "font-figtree font-normal",
  txtOpenSans14: "font-normal font-opensans",
  txtMontserratBold24: "font-bold font-montserrat",
  txtLatoRegular16: "font-lato font-normal",
  txtPoppinsBold24: "font-bold font-poppins",
  txtFigtreeSemiBold16: "font-figtree font-semibold",
  txtMontserratBold72: "font-bold font-montserrat",
  txtMontserratRegular14WhiteA700: "font-montserrat font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
