import { StyledIconLInk } from "../../../styles/components/buttons";
import { StyledTitle } from "../../../styles/typography";
import { StyledGameListHeader } from "./style";
import { MdArrowForward } from "react-icons/md";
export const GameListHeader = () => {
  return (
    <StyledGameListHeader>
      <StyledTitle tag="h2" fontSize="slg" fontWeight={700}>
        Os mais jogados
      </StyledTitle>
      <StyledIconLInk>
        <MdArrowForward size={30} />
      </StyledIconLInk>
    </StyledGameListHeader>
  );
};

export default GameListHeader;
