import React, { useState } from "react";
import styled from "styled-components";
import dice_1 from "../dice_1.png";
import dice_2 from "../dice_2.png";
import dice_3 from "../dice_3.png";
import dice_4 from "../dice_4.png";
import dice_5 from "../dice_5.png";
import dice_6 from "../dice_6.png";

const diceImages = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];

const RoleDice = ({ roleDice, currentDice }) => {
  const [rolling, setRolling] = useState(false);

  const handleClick = () => {
    setRolling(true);
    roleDice();
    setTimeout(() => setRolling(false), 500); // Reset animation after 500ms if a number is selected
  };

  return (
    <DiceContainer>
      <div
        className={`dice ${rolling ? "rolling" : ""}`}
        onClick={handleClick}
        style={{ animationDuration: currentDice ? "500ms" : "1s" }} // Shorter duration if currentDice is set
      >
        <img src={diceImages[currentDice - 1]} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 1s;
  }

  .rolling {
    animation: roll 0.2s ease-in-out;
  }

  @keyframes roll {
    0% {
      transform: rotateX(0) rotateY(0);
    }
    50% {
      transform: rotateX(1800deg) rotateY(1800deg);
    }
    100% {
      transform: rotateX(3600deg) rotateY(3600deg);
    }
  }

  p {
    font-size: 24px;
    margin-top: 16px;
  }
`;
