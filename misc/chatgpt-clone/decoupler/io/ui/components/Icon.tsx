import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const IconWrapper = styled.span`
  display: flex;
  color: white;
  margin: auto 0;
  justify-content: center;
  align-items: center;

  padding: 2px;
  border: 1px solid transparent;
  :hover {
    border: 1px solid grey;
  }
`;

export const Icon: React.FC<React.ComponentProps<typeof FontAwesomeIcon>> = ({
  className,
  ...rest
}) => {
  return (
    <IconWrapper>
      <FontAwesomeIcon {...rest} className={`${className} icon`} />
    </IconWrapper>
  );
};
