import { useState, createContext, useContext } from "react";
import { ChildrenPropsType, LoginValuesType } from "../types"

//create context and use object to default value
//* not correctly use <any> as type, but i don't understand how use type in createContext on this case. :/
export const LoginContext = createContext<any>({});

export default function LoginProvider({ children }: ChildrenPropsType) {
  //create state an function to set values of forms
  const [data, setData] = useState({});

  function setLoginValues(values: LoginValuesType) {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  }

  return (
    <LoginContext.Provider value={{ data, setLoginValues }}>
      {children}
    </LoginContext.Provider>
  );
}

//shortcut to use data inside contextForm
export const useLoginData = () => useContext(LoginContext);
