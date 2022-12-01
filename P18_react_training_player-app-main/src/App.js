import React from "react";
import { useEffect, useState } from "react";
import { StyledTitle, StyledTable, StyledHeader, StyledPlayer, StyledP, StyledButtonSection, ButtonChangeColour  } from "./components/Table.style";
import { TotalPoints } from "./components/TotalPoints";
import { AveragePoints } from "./components/AveragePoints";

function App() {
  const [highlightingColor, setHighlightingColor] =
    useState("rgb(235, 84, 68)");
  const [state, setState] = useState([]);

  const List = () => {
    useEffect(() => {
      fetch("/players.json")
        .then((response) => response.json())
        .then((response) => setState(response));
    }, []);

    const showPlayers = () =>
      state.map((player) => {
        return (
          <StyledPlayer
            key={player.id}
            style={{
              background: player.points >= 100 ? highlightingColor : "white",
              color: player.points >= 100 ? "white" : "black",
            }}
          >
            <StyledP>{player.username}</StyledP>
            <StyledP>{player.points}</StyledP>
          </StyledPlayer>
        );
      });

    return <div>{showPlayers()}</div>;
  };

  return (
    <StyledTable>
      <StyledButtonSection>
        <ButtonChangeColour
          onClick={() => setHighlightingColor("rgb(235, 84, 68)")}
        >
          Red
        </ButtonChangeColour>
        <ButtonChangeColour
          onClick={() => setHighlightingColor("rgb(129, 189, 219)")}
        >
          Blue
        </ButtonChangeColour>
      </StyledButtonSection>

      <StyledHeader>
        <StyledTitle>Username</StyledTitle>
        <StyledTitle>Points</StyledTitle>
      </StyledHeader>

      <List />

      <StyledHeader>
        <StyledTitle>Total</StyledTitle>
        <TotalPoints state={state} />
      </StyledHeader>

      <StyledHeader>
        <StyledTitle>Average</StyledTitle>
        <AveragePoints state={state} />
      </StyledHeader>
    </StyledTable>
  );
}

export default App;
