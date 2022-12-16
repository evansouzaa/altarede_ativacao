import { InputStyled } from "./styles";

type Props = {
    tag: string,
    type: string,
}

export const Input = ({ tag, type } : Props) => {
    return (
        <InputStyled>
            <label htmlFor="">{ tag }</label>
            <input type={ type } />
        </InputStyled>
    )
}