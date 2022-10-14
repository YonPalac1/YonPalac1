import React, { useState, createContext } from 'react';
export const AppContext = createContext();

export const AppProvider = props => {
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState("");

  return (
    <AppContext.Provider
      value={{
        images, setImages,
        title, setTitle
      }}>
      {props.children}
    </AppContext.Provider>
  );
};