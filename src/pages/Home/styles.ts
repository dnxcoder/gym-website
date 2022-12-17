import styled from "styled-components";

export const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2c2626;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
`;

export const FirstShapeBackground = styled.div`
  clip-path: polygon(70% 0, 100% 0, 100% 100%, 0 100%);
  background-color: #bbce45;
  width: 50vw;
  height: 100vh;
  position: absolute;
  right: 0;
  z-index: 1;
  top: 0;
`;

export const SecondShapeBackground = styled.div`
  clip-path: polygon(78% 0, 100% 0, 100% 100%, 50% 100%);
  background-color: #c5d84f;
  width: 50vw;
  height: 100vh;
  position: absolute;
  right: 0;
  z-index: 2;
  top: 0;
`;

export const ThirdShapeBackground = styled.div`
  clip-path: polygon(89% 0, 100% 0, 100% 100%, 76% 100%);
  background-color: #cce04e;
  width: 50vw;
  height: 100vh;
  position: absolute;
  right: 0;
  z-index: 3;
  top: 0;
`;

export const TopContainer = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  z-index: 99;
  height: 4rem;
  align-items: center;
  overflow: hidden;
`;

export const LeftContainerTopContainer = styled.div`
  width: 25%;
  text-align: left;
  padding-left: 7rem;
  color: #fff;
`;

export const Logo = styled.img`
  height: 6rem;
`;

export const MiddleContainerTopContainer = styled.div`
  width: 55%;
`;

export const RightContainerTopContainer = styled.div`
  width: 20%;
`;

export const ButtonRegisterNow = styled.button`
  border: 0;
  clip-path: polygon(0% 0%, 100% 0%, 100% 72%, 79% 100%, 0% 100%);
  padding: 1rem;
  margin-top: auto;
`;

export const LabelButton = styled.label`
  font-family: "roboto";
  font-weight: 600;
`;

export const Menu = styled.ul`
  display: flex;
  margin-left: auto;
  margin-top: auto;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  z-index: 99;
`;

export const MenuItem = styled.li`
  list-style: none;
  color: #fff;
  font-family: "Roboto";
  font-size: 1.2rem;
  font-weight: 500;
`;

export const ContentContainer = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 8%;
  display: flex;
  flex-direction: column;
  padding-left: 7rem;
  //padding-left: 2rem;
`;

export const MakeYourText = styled.span`
  color: #fff;
  font-size: 3rem;
  text-align: left;
`;

export const BodyShape = styled.h3`
  color: #fff;
  font-size: 5rem;
  text-align: left;
  margin-top: 2rem;
`;

export const Text = styled.p`
  color: #fff;
  text-align: left;
  margin-top: 1rem;
  line-height: 2rem;
`;

export const WomanPhoto = styled.img`
  width: 500px;
  position: absolute;
  right: 10%;
  z-index: 99;
  bottom: 0;
`;
export const ManPhoto = styled.img`
  width: 600px;
  position: absolute;
  right: 20%;
  z-index: 99;
  bottom: 0;
`;

export const AsianManPhoto = styled.img`
  width: 400px;
  position: absolute;
  right: 25%;
  z-index: 98;
  bottom: 0;
`;
