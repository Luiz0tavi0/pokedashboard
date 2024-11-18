import { iMyGame } from "../../../data/database";
import { StyledButton } from "../../../styles/components/buttons";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import StyledMyGameCard from "./style";

interface iMyGameCardProps {
  game: iMyGame;
}
const MyGameCard = ({
  game: { name, image, category, playedHours, install },
}: iMyGameCardProps) => {
  return (
    <StyledMyGameCard>
      <div className="left">
        <img src={image} alt={name} />
        <div>
          <StyledTitle tag="h3" fontSize="md" fontWeight={700}>
            {name}
          </StyledTitle>
          <StyledParagraph fontSize="lg">{category}</StyledParagraph>
        </div>
      </div>
      <div className="right">
        <StyledParagraph fontSize="md">
          <strong>{playedHours} hours played</strong>
        </StyledParagraph>
        {install ? (
          <StyledButton $buttonStyle="solid" $buttonSize="sm">
            Jogar
          </StyledButton>
        ) : (
          <StyledButton $buttonStyle="outline" $buttonSize="sm">
            Instalar
          </StyledButton>
        )}
      </div>
    </StyledMyGameCard>
  );
};

export default MyGameCard;
