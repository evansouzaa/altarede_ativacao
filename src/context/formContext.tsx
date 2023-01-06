import { useState, createContext, useContext, ReactNode } from "react";

//type form context
type ChildrenPropsType = {
    children: ReactNode
}

type FormValuesType = {
    values: object
    setFormValues: () => void
}

//create context and use object to default value
//* not correctly use <any> as type, but i don't understand how use type in createContext on this case. :/
export const FormContext =  createContext<any>({});

//export formprovider component using FormContext
export default function FormProvider({ children } :ChildrenPropsType) {
  const [data, setData] = useState({});

  const setFormValues = (values : FormValuesType) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };
  
  console.log(data)
  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

//shortcut to use data inside contextForm
export const useFormData = () => useContext(FormContext);
