import { useState, useContext, createContext } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  return (
    <AppContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
