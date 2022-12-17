import React from "react";
import {
  BodyShape,
  ButtonRegisterNow,
  ContentContainer,
  FirstShapeBackground,
  LabelButton,
  LeftContainerTopContainer,
  Logo,
  MakeYourText,
  Menu,
  MenuItem,
  MiddleContainerTopContainer,
  RightContainerTopContainer,
  Screen,
  SecondShapeBackground,
  ThirdShapeBackground,
  TopContainer,
  Text,
  WomanPhoto,
  ManPhoto,
  AsianManPhoto,
} from "./styles";

import MonsterGym from "../../assets/monster-gym.png";
import Woman from "./assets/woman.png";
import Man from "./assets/man.png";
import AsianMan from "./assets/asianman.png";

function Home() {
  return (
    <Screen>
      <FirstShapeBackground />
      <SecondShapeBackground />
      <ThirdShapeBackground />

      <TopContainer>
        <LeftContainerTopContainer>Here is my logo</LeftContainerTopContainer>
        <MiddleContainerTopContainer>
          <Menu>
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact Us</MenuItem>
          </Menu>
        </MiddleContainerTopContainer>
        <RightContainerTopContainer>
          <ButtonRegisterNow>
            <LabelButton>Register Now</LabelButton>
          </ButtonRegisterNow>
        </RightContainerTopContainer>
      </TopContainer>
      <ContentContainer>
        <MakeYourText>MAKE YOUR</MakeYourText>
        <BodyShape>BODY SHAPE</BodyShape>
        <Text>
          In regard to using gym work experience to help with my {<br />}{" "}
          college course was able to do soor
        </Text>
        <WomanPhoto src={Woman} />
        <ManPhoto src={Man} />
        {/* <AsianManPhoto src={AsianMan} /> */}
      </ContentContainer>
    </Screen>
  );
}

export default Home;
