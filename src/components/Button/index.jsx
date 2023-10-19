import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[12px]" };
const variants = {
  fill: {
    deep_purple_50: "bg-deep_purple-50",
    green_300: "bg-green-300",
    orange_200: "bg-orange-200",
    red_200: "bg-red-200",
    indigo_200: "bg-indigo-200",
    green_50: "bg-green-50 text-green-500",
  },
};
const sizes = { xs: "p-0.5", sm: "p-1.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "green_50",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "deep_purple_50",
    "green_300",
    "orange_200",
    "red_200",
    "indigo_200",
    "green_50",
  ]),
};

export { Button };
