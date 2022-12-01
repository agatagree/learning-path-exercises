import styled from 'styled-components'
import { useState } from "react";

interface CardProperties {
    name: string;
    picture: string;
    description: string;
}

export const ProjectCard = ( Properties: CardProperties ) => {
    const [ count, setCount ] = useState<number>(0);

    const handleClick =  () => {
        setCount(count => count + 1);
      }
    return (
    <StyledCard>
            <StyledImg src={Properties.picture}/>
            <h3>{Properties.name}</h3>
            <StyledDescription>{Properties.description}</StyledDescription>
            <StyledLikes>
              <StyledLikeButton onClick={handleClick}>♡</StyledLikeButton>
              <StyledCounter data-testid="counterId">{count}</StyledCounter>
            </StyledLikes>
    </StyledCard>
)}

const StyledCard = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background: rgba(255, 255, 255, 0.8);
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 32%;
    max-height: 500px;
    box-sizing: border-box ;
    overflow: hidden;
    padding: 20px;
    border-radius:2px;
`

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`

const StyledLikes = styled.div `
    display: flex;
    align-items: center;
    align-self: flex-end;
`

const StyledDescription = styled.div `
    flex: 1;
    box-sizing: border-box ;
    overflow: hidden;
`

const StyledLikeButton = styled.button`
    border: none;
    background: none;
    font-size: 30px;
    cursor: pointer;
    &:active {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`
const StyledCounter = styled.p`
    width: 20px;
    text-align: right;
`