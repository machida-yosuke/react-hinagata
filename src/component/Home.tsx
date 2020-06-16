import React from "react";
import styled from "styled-components";
import { flexCenter } from "@/styles/utile";
import image from "@/assets/image/image.jpg";
import large from "@/assets/image/large.jpg";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "@/store/actions/count";
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <Contents>
        <Hello>HelloReact!</Hello>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">about</Link>
        </div>
        <div>{count}</div>
        <BtnWrap>
          <Btn onClick={() => dispatch(increase(count))}>+</Btn>
          <Btn onClick={() => dispatch(decrease(count))}>-</Btn>
        </BtnWrap>
        <Image></Image>
        <img src={image} width={300} height={300} />
        <LargeImage></LargeImage>
      </Contents>
    </>
  );
};

const Contents = styled.div`
  width: 100vw;
  height: 100vh;
  ${flexCenter};
`;

const Hello = styled.div``;

const BtnWrap = styled.div``;

const Btn = styled.div`
  width: 100px;
  height: 100px;
  background: red;
  cursor: pointer;
`;

const Image = styled.div`
  width: 200px;
  height: 200px;
  background: url(${image});
  background-size: cover;
`;

const LargeImage = styled.div`
  width: 200px;
  height: 200px;
  background: url(${large});
  background-size: cover;
`;

export default Home;
