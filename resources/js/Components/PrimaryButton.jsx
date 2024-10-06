import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const PrimaryButton = forwardRef(function PrimaryButton(
  {
    className = "",
    variant = "primary",
    disabled,
    children,
    processing,
    ...props
  },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      className={
        `rounded-2xl py-[13px] text-center ${processing && "opacity-30"} btn-${variant} ${
          disabled && "opacity-25"
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
});

PrimaryButton.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "light-outline",
    "white-outline",
  ]),
  processing: PropTypes.bool,
  children: PropTypes.node,
};

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
