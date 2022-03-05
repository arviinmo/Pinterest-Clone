import React from "react";
import styled from "styled-components";
import PinterestIcon from "@material-ui/icons/Pinterest";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>
      {/* <HomePageButton></HomePageButton>
      <FollowingButton></FollowingButton>
      <SearchWrapper>
        <SearchBarWrapper></SearchBarWrapper>
      </SearchWrapper>
      <IconsWrapper></IconsWrapper> */}
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;

const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;