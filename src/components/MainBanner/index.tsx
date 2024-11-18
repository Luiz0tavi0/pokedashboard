import { StyledButton } from "../../styles/components/buttons";
import {
  StyledParagraph,
  StyledTag,
  StyledTitle,
} from "../../styles/typography";
import Charizard from "./../../assets/large.charizard.png";
import { StyledBanner } from "./style";
const MainBanner = () => {
  return (
    <StyledBanner>
      <div className="flexGrid">
        <div className="content">
          <StyledTag $backgroundColor="red">RPG</StyledTag>
          <StyledTitle tag="h1" fontWeight={400} fontSize="lg">
            Lorem Ipsuim Pokeword
          </StyledTitle>
          <div className="priceBox">
            <StyledParagraph $customFontSize={"18px"} opacity={1}>
              <strong>R$ 299,00</strong>
            </StyledParagraph>
            <StyledButton $buttonStyle={"solid"} $buttonSize={"lg"}>
              Comprar
            </StyledButton>
          </div>
        </div>
        <div className="imageGrid">
          <img src={Charizard} alt="Imagem do Pokemon Charizard"></img>
        </div>
      </div>
    </StyledBanner>
  );
};

export default MainBanner;
