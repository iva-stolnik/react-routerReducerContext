import React, { useState, useReducer } from "react";
import { Modal } from "react-bootstrap";

const reducer = (state, akcija) => {
  switch (akcija.type) {
    case "promjena_inputa":
      return { ...state, ime: akcija.payload };
    case "unesi": {
      if (akcija.payload === undefined || "") {
        return { ...state };
      }
      const novaOsoba = {
        id: new Date().getTime().toString(),
        ime: akcija.payload,
      };

      return {
        ...state,
        ime: "",
        osobe: [...state.osobe, novaOsoba],
        showModal: true,
        textModal: (
          <h4>
            Dodali ste osobu:
            <em className="text-capitalize"> {akcija.payload}</em>
          </h4>
        ),
      };
    }
    case "obrisi":
      const noveOsobe = state.osobe.filter(
        (osoba) => osoba.id !== akcija.payload.id
      );
      return {
        ...state,
        osobe: noveOsobe,
        showModal: true,
        textModal: (
          <h4>
            Obrisali ste osobu:
            <em className="text-capitalize"> {akcija.payload.ime}</em>
          </h4>
        ),
      };
    case "reset":
      return {
        ...state,
        ime: "",
        osobe: [...state.osobe],
        showModal: false,
        textModal: "",
      };
    default:
      throw new Error("Nema takve radnje!");
  }
};

const initialState = {
  osobe: [
    { id: "1", ime: "Šime" },
    { id: "2", ime: "Frane" },
  ],
  showModal: false,
  textModal: "",
};

const ReducerGlupi = () => {
  // eslint-disable-next-line
  const [ime, setIme] = useState("");
  const [counter, setCounter] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  var countdown = () => {
    setTimeout(() => {}, 3000);
  };

  function timer() {
    if (state.showModal) {
      countdown();
    }
  }

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    console.log(counter);
    if (counter === 0) {
      dispatch({ type: "reset" });
    }
  }, [counter]);
  console.log(state.showModal);

  return (
    <div className="container">
      <div className="col-md-6" style={{ margin: "auto" }}>
        <div
          name="modal"
          id="modal"
          className={state.showModal ? "visible" : "invisible"}
        >
          <Modal.Dialog className="rounded bg-secondary">
            <Modal.Body className="bg-dark text-white">
              {state.textModal}
            </Modal.Body>
            <Modal.Footer>
              <p className="text-danger">
                Modal će se zatvoriti za {counter} sekunde
              </p>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
        <div name="unos">
          <input
            type="text"
            name="novaOsoba"
            placeholder="Unesite novu osobu"
            className="mr-1 p-2 border-dark"
            value={state.ime}
            onChange={(e) =>
              dispatch({ type: "promjena_inputa", payload: e.target.value })
            }
          />
          <button
            type="button"
            name="posalji"
            className="btn btn-dark "
            onClick={() => {
              dispatch({ type: "unesi", payload: state.ime });
              setCounter(3);
              timer();
            }}
          >
            Unesi
          </button>
        </div>
        <div name="lista">
          <h4>Unesene osobe:</h4>
          {state.osobe.map((osoba, index) => {
            return (
              <div key={index} className="row m-1 p-1 text-danger">
                <h6 className="text-capitalize" style={{ width: "70%" }}>
                  {osoba.ime}
                </h6>
                <i
                  className="fas fa-trash"
                  onClick={() => {
                    setCounter(3);
                    timer();
                    dispatch({ type: "obrisi", payload: osoba });
                  }}
                ></i>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReducerGlupi;
