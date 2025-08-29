import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (prop) => {
  const currencySymboll = "$"
  const value = {
    doctors,
    currencySymboll
  };

  return (
    <AppContext.Provider value={value}>{prop.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
