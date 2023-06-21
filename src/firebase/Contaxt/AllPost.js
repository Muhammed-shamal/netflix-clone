import { createContext, useState } from "react";

export const AllpostContext = createContext(null);

export default function ContextAll({ children }) {
  const [allPost, setAllPost] = useState();
  return (
    <AllpostContext.Provider value={(allPost, setAllPost)}>
      {children}
    </AllpostContext.Provider>
  );
}
