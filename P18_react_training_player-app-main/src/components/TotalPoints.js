export const TotalPoints = ({ state }) => {
  return state.reduce((total, player) => {
    return total + player.points;
  }, 0);
};
