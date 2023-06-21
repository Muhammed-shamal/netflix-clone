import { createContext, useState } from "react";

export const ListContext = createContext(null);

export default function ListFun({ children }) {
  const [addList, setAddList] = useState("");
  return (
    <ListContext.Provider value={{ addList, setAddList }}>
      {children}
    </ListContext.Provider>
  );
}
