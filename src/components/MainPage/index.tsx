import { MainPageStyled } from "./styles"

type Props = { children: React.ReactNode };

export const MainPage: React.FC<Props> = ({ children }) => {
  return (
    <MainPageStyled>
      { children }
    </MainPageStyled>
  );
}