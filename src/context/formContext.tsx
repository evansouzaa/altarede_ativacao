import { useState, createContext, useContext } from "react";
import { ChildrenPropsType, FormValuesType } from "../types"

//create context and use object to default value
//* not correctly use <any> as type, but i don't understand how use type in createContext on this case. :/
export const FormContext = createContext<any>({});

//export formprovider component using FormContext
export default function FormProvider({ children }: ChildrenPropsType) {
  //create state an function to set values of forms
  const [data, setData] = useState({});

  function setFormValues(values: FormValuesType) {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  }

  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

//shortcut to use data inside contextForm
export const useFormData = () => useContext(FormContext);
