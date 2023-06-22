import React from "react";
import styled from "styled-components";

const ButtonSyled = styled.button`
  height: ${(props) => (props.size === "medium" ? "40px" : "32px")};
  padding: ${(props) => (props.size === "medium" ? "12px 20px" : "8px 16px")};
  cursor: pointer;
  color: rgb(239 68 68);
  width: ${(props) => (props.fullWidth ? "100%" : "max-content")};
  border: ${(props) => {
    if (props.disabled) {
      if (props.variant === "secondary") {
        return "1.5px solid rgb(156 163 175)";
      }
      return "none";
    } else if (
      props.variant === "tertiary" ||
      (props.inverted && props.variant === "primary")
    ) {
      return "none";
    } else if (props.inverted) {
      return "1px solid white";
    } else {
      return "1.5px solid rgb(239 68 68)";
    }
  }};
  background-color: ${(props) => {
    if (props.disabled) {
      if (props.variant === "secondary") {
        return "white";
      }
      if (props.inverted) {
        return "transparent";
      }
      return "rgb(229 231 235)";
    } else if (props.inverted) {
      if (props.variant !== "primary") {
        return "transparent";
      }
      return "white";
    } else {
      if (props.variant === "primary") {
        return "rgb(239 68 68)";
      } else {
        return "white";
      }
    }
  }};
  border-radius: 18px;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-direction: ${(props) =>
    props.iconPosition === "after" ? "row-reverse" : "row"};
  transition: all;
  duration: 150ms ease-in-out;

  &:hover {
    background-color: ${(props) => {
      if (props.variant === "primary" && props.inverted) {
        return "rgb(209 213 219)";
      } else if (props.variant !== "primary" && props.inverted) {
        return "transparent";
      } else if (props.variant === "primary") {
        return "rgb(220 38 38)";
      } else if (props.inverted) {
        return "rgb(229 231 235)";
      } else {
        return "white";
      }
    }};
    color: ${(props) =>
      props.variant !== "primary" && !props.disabled
        ? "rgb(220 38 38)"
        : "white"};
  }

  &:active {
    background-color: ${(props) => {
      if (props.variant === "primary" && props.inverted) {
        return "rgb(209 213 219)";
      } else if (props.variant !== "primary" && props.inverted) {
        return "transparent";
      } else if (props.variant === "primary") {
        if (props.inverted) {
          return "rgb(209 213 219)";
        }
        return "rgb(185 28 28)";
      } else if (props.inverted) {
        return "rgb(209 213 219)";
      } else {
        return "white";
      }
    }};
    color: ${(props) =>
      props.variant !== "primary" && !props.disabled
        ? "rgb(185 28 28)"
        : "white"};
  }

  pointer-events: ${(props) => (props.disabled ? "none" : null)};
`;

const BoxIcon = styled.div`
  margin: 0;
  height: ${(props) => (props.size === "medium" ? "12px" : "16px")};
  width: ${(props) => (props.size === "medium" ? "12px" : "16px")};
  border-radius: ${(props) => {
    if (props.disabled || props.variant !== "primary" || props.inverted) {
      return "100%";
    } else {
      return "0%";
    }
  }};
  border: ${(props) => {
    if (props.variant !== "primary" && props.inverted) {
      return "none";
    }
    if (props.disabled) {
      if (props.variant !== "primary") {
        return "1px solid rgb(107 114 128)";
      }
      return "1px solid  rgb(107 114 128)";
    } else {
      if (props.variant !== "priamry") {
        return "2px solid rgb(239 68 68)";
      }
      return "none";
    }
  }};
  background-color: white;
`;

const BoxIconOuter = styled.button`
  cursor: pointer;
  margin: 0;
  height: 32px;
  width: 32px;
  border: ${(props) => {
    if (props.disabled) {
      return "none";
    }
    if (props.variant === "secondary" && props.inverted) {
      return "1px solid white";
    } else if (props.variant === "secondary") {
      return "1px solid rgb(220 38 38)";
    }
    return "none";
  }};
  border-radius: 100%;
  background-color: ${(props) => {
    if (props.variant === "primary" && props.inverted) {
      return "white";
    } else if (props.disabled || props.variant !== "primary") {
      return "lightgray";
    } else {
      return "rbg(239 68 68)";
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => {
      if (props.variant === "primary" && props.inverted) {
        return "rgb(209 213 219)";
      } else if (props.variant !== "primary" && props.inverted) {
        return "transparent";
      } else if (props.variant === "primary") {
        return "rgb(220 38 38)";
      } else if (props.inverted) {
        return "rgb(229 231 235)";
      } else {
        return "white";
      }
    }};
    color: ${(props) =>
      props.variant !== "primary" && !props.disabled
        ? "rgb(220 38 38)"
        : "white"};
    border: ${(props) => {
      if (props.variant === "secondary" && props.inverted) {
        return "1px solid rgb(156 173 175)";
      }
    }};
  }

  &:active {
    background-color: ${(props) => {
      if (props.variant === "primary" && props.inverted) {
        return "rgb(209 213 219)";
      } else if (props.variant !== "primary" && props.inverted) {
        return "transparent";
      } else if (props.variant === "primary") {
        if (props.inverted) {
          return "rgb(209 213 219)";
        }
        return "rgb(185 28 28)";
      } else if (props.inverted) {
        return "rgb(209 213 219)";
      } else {
        return "white";
      }
    }};
    color: ${(props) =>
      props.variant !== "primary" && !props.disabled
        ? "rgb(185 28 28)"
        : "white"};
  }

  pointer-events: ${(props) => (props.disabled ? "none" : null)};
`;

const ButtonLabel = styled.p`
  margin: 0;
  background-color: inherit;
  color: ${(props) => {
    if (props.disabled) {
      return "rgb(156 163 175)";
    } else if (props.inverted) {
      if (props.variant !== "primary") {
        return "white";
      }
      return "red";
    } else {
      if (props.variant !== "primary") {
        return "inherit";
      }
      return "white";
    }
  }};
  text-transform: uppercase;
  font-size: ${(props) => (props.size === "medium" ? "16px" : "13px")};
`;

const Icon = ({ size, disabled, variant, inverted }) => {
  return (
    <BoxIconOuter
      size={size}
      disabled={disabled}
      variant={variant}
      inverted={inverted}
    >
      <BoxIcon
        size={size}
        disabled={disabled}
        variant={variant}
        inverted={inverted}
      />
    </BoxIconOuter>
  );
};

const Button = ({
  variant = "primary",
  inverted = false,
  size = "medium",
  fullWidth = false,
  label = "Button",
  icon = false,
  iconPosition = "before",
  iconOnly = false,
  disabled = false,
}) => {
  if (iconOnly) {
    return (
      <Icon
        size={size}
        disabled={disabled}
        variant={variant}
        inverted={inverted}
      />
    );
  } else {
    return (
      <ButtonSyled
        size={size}
        disabled={disabled}
        variant={variant}
        inverted={inverted}
        fullWidth={fullWidth}
        iconPosition={iconPosition}
      >
        {icon && (
          <BoxIcon
            size={size}
            disabled={disabled}
            variant={variant}
            inverted={inverted}
          ></BoxIcon>
        )}

        <ButtonLabel
          size={size}
          disabled={disabled}
          variant={variant}
          inverted={inverted}
        >
          {label}
        </ButtonLabel>
      </ButtonSyled>
    );
  }
};

export default Button;
