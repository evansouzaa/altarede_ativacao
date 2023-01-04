import { useState, createContext, useContext, ReactNode } from "react";

type FormContext = {
    value: object,
}

type FormProvider = {
    children: ReactNode,
    data: string,
    setData: () => void,
}

export const FormContext = createContext<FormContext | null>(null);

export default function FormProvider({ children }: FormProvider) {
  const [data, setData] = useState({});

  const setFormValues = (values : any) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);