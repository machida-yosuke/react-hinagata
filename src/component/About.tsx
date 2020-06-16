import React from "react";
import styled from "styled-components";
import { flexCenter } from "@/styles/utile";

const About: React.FC = () => {
  return (
    <>
      <Contents>
        <Hello>about!</Hello>
      </Contents>
    </>
  );
};

const Contents = styled.div`
  width: 100vw;
  height: 100vh;
  ${flexCenter};
  background: red;
`;

const Hello = styled.div``;

export default About;
