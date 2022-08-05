import React, { createContext, useState } from 'react';


const CurrentModalContext = createContext({
  isliked: false,
  setIsliked: () => {},
});

export const CurrentLikeProvider = ({ children }) => {
  const [modalOnOff, setModalOnOff] = useState(false);

  return (
    <CurrentModalContext.Provider
      value={{
        modalOnOff,
        setModalOnOff,
      }}>
      {children}
    </CurrentModalContext.Provider>
  );
};

export default CurrentModalContext;