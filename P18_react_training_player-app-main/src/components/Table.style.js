import styled from "styled-components";

export const StyledTable = styled.div`
  border: 1px solid rgb(237, 239, 240);
  border-radius: 5px;
  width: 400px;
  padding: 2px 10px;
  margin: auto;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 200;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const StyledPlayer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  box-sizing: border-box;
  padding: 0 10px;
  border-radius: 4px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 12px;
`;

export const StyledTitle = styled.h2`
  margin: 5px 0;
  font-size: 16px;
`;

export const StyledP = styled.p`
  margin: 5px 0;
  font-size: 16px;
`;

export const StyledButtonSection = styled.div`
  display: flex;
  justify-content: right;
  margin: 10px 0;
`;

export const ButtonChangeColour = styled.button`
  margin-left: 10px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  color: #111827;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  font-size: 16px;
  padding: 5px;
  width: 90px;
  &:hover {
    background-color: rgb(237, 239, 240);
  }
`;

//     <!-- HTML !-->
// <button class="button-38" role="button">Button 38</button>

// /* CSS */
// .button-38 {
//   background-color: #FFFFFF;
//   border: 0;
//   border-radius: .5rem;
//   box-sizing: border-box;
//   color: #111827;
//   font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
//   font-size: .875rem;
//   font-weight: 600;
//   line-height: 1.25rem;
//   padding: .75rem 1rem;
//   text-align: center;
//   text-decoration: none #D1D5DB solid;
//   text-decoration-thickness: auto;
//   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
//   cursor: pointer;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
// }

// .button-38:hover {
//   background-color: rgb(249,250,251);
// }

// .button-38:focus {
//   outline: 2px solid transparent;
//   outline-offset: 2px;
// }

// .button-38:focus-visible {
//   box-shadow: none;
// }
