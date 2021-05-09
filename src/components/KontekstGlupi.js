import React, { useState, useContext } from "react";

const OsobeKontekst = React.createContext();

const KontekstGlupi = () => {
  const [state, setstate] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const removeItem = (id) => {
    setstate((state) => {
      return state.filter((item) => item !== id);
    });
  };

  return (
    <OsobeKontekst.Provider value={{ removeItem, state }}>
      <h4>Lista brojeva:</h4>
      <Lista />
    </OsobeKontekst.Provider>
  );
};

const Lista = () => {
  const unosimIzKonteksta = useContext(OsobeKontekst);
  return (
    <ul>
      {unosimIzKonteksta.state.map((item, index) => (
        <li key={index} style={{ listStyle: "none" }}>
          {item} &nbsp;&nbsp;&nbsp; <IzbrisisElement element={item} />
        </li>
      ))}
    </ul>
  );
};

const IzbrisisElement = ({ element }) => {
  const { removeItem } = useContext(OsobeKontekst);
  return <i className="fas fa-trash" onClick={() => removeItem(element)}></i>;
};
export default KontekstGlupi;
