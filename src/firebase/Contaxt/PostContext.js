import { createContext, useState } from "react";

//setting as null value;
export const PostContext = createContext(null);

export default function Post({ children }) {
  const [postDetails, setPostDetails] = useState();
  return (
    <PostContext.Provider value={{ postDetails, setPostDetails }}>
      {children}
    </PostContext.Provider>
  );
}
