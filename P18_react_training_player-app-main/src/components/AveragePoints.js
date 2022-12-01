import { TotalPoints } from "./TotalPoints";

export const AveragePoints = ({ state }) => {
  return TotalPoints({ state }) / state.length;
};
