import { gameData, iGame } from "../../data/database";
import { GameCard } from "./GameCard";
import { GameListHeader } from "./GameListHeader";
import { StyledGameList } from "./style";

export const GameList = () => {
  const newGameData = [...gameData];
  newGameData.length = 3;
  return (
    <>
      <GameListHeader />
      <StyledGameList>
        {newGameData.map((game: iGame) => (
          <GameCard key={game.name} game={game} />
        ))}
      </StyledGameList>
    </>
  );
};
