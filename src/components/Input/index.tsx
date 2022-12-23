import { InputStyled } from "./styles";

type Props = {
    tag: string,
    type: string,
    id: string,
    placeholder: string,
    value: string,
    setValue: Function
}

export const Input = ({ setValue, value, tag, type, id, placeholder } : Props) => {
    
    function handleChange(e: React.FormEvent<HTMLInputElement>){
        setValue(e.currentTarget.value) 
        //console.log(e.currentTarget.value)
    }

    return (
        <InputStyled>
            <label htmlFor={ id }>{ tag }</label>
            <input onChange={handleChange} value={value} type={ type } id={ id } name={ id } placeholder={ placeholder }/>
        </InputStyled>
    )
}