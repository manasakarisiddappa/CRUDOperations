import { createContext, useReducer } from "react";
import { CRUDReducer } from "./CRUDReducer";

const CRUDContext = createContext();

const CRUDProvider = ({ children }) => {
  const intialState = {
    posts: [],
    modalType: null,
    modalData: null,
  };

  const [state, dispatch] = useReducer(CRUDReducer, intialState);

  return (
    <CRUDContext.Provider value={{ state, dispatch }}>
      {children}
    </CRUDContext.Provider>
  );
};

export { CRUDContext, CRUDProvider };
