import { useFormData } from "../../../context";
import { FormStyled } from "../styles";

export default function FormCompleted() {
  const { data } = useFormData();

  return (
    <>
      <h2>Thank you for your purchase! 🎉</h2>

      <pre>{JSON.stringify(data)}</pre>
    </>
  );
}