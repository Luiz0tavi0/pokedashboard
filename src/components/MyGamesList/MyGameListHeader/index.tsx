import { MdArrowForward } from "react-icons/md";
import { StyledIconLInk } from "../../../styles/components/buttons";
import { StyledTitle } from "../../../styles/typography";
import { StyledMyGameListHeader } from "./style";

const MyGameListHeader = () => {
  return (
    <StyledMyGameListHeader>
      <StyledTitle tag="h2" fontSize="slg" fontWeight={700}>
        Meus Jogos
      </StyledTitle>
      <StyledIconLInk>
        <MdArrowForward size={30} />
      </StyledIconLInk>
    </StyledMyGameListHeader>
  );
};

export default MyGameListHeader;
