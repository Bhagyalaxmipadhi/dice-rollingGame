import styled from "styled-components";
import { Button } from "./Button";
import Dicegame from "../Dicegame.png";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <Image src={Dicegame} alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
const Image = styled.img`
  height: 80%;
  width: 80%;
`;
