import React from "react";
import styled from "styled-components";

function Mainboard() {
  return (
    <Wrapper>
      <Container>
        <Pin />
      </Container>
    </Wrapper>
  );
}

export default Mainboard;

const Wrapper = styled.div`
  height: 400px;
  width: 100%;
  background-color: blue;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: 90%;
  background-color: green;
`;
