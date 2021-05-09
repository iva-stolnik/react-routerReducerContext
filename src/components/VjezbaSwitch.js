import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

const VjezbaSwitch = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <h1>Dobrodošli na početnu stranicu</h1>
        </Route>
        <Route path="/o-nama">
          <h1>Dobrodošli na stranicu o nama</h1>
        </Route>
        <Route path="/nasi-proizvodi">
          <h1>Naši proizvodi</h1>
        </Route>
        <Route path="*">
          <h1>Error - stranica ne postoji</h1>
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default VjezbaSwitch;
