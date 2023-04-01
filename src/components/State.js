import React from "react";
import { useSelector, useDispatch } from "react-redux";
import statesData from "../json/states.json";

const State = () => {
  const selectedState = useSelector((state) => state.selectedState);
  const dispatch = useDispatch();

  const handleStateClick = (state) => {
    dispatch({ type: "SELECT_STATE", payload: state });
  };

  const handleBackClick = () => {
    dispatch({ type: "DESELECT_STATE" });
  };

  const renderStateList = () => {
    return statesData.statesInfo.states.map((state) => (
      <div
        key={state["@attributes"].abbreviation}
        onClick={() => handleStateClick(state)}
      >
        {state["@attributes"].name}
      </div>
    ));
  };

  const renderStateDetail = () => {
    const state = selectedState["@attributes"];
    const flagUrl = `https://www.50states.com/images/redesign/flags/${state[
      "abbreviation"
    ].toLowerCase()}-largeflag.png`;

    return (
      <div>
        <h2>{state.name}</h2>
        <img src={flagUrl} alt={`${state.name} flag`} />
        <p>Abbreviation: {state.abbreviation}</p>
        <p>Capital: {state.capital}</p>
        <p>Most populous city: {state["most-populous-city"]}</p>
        <p>Population: {state.population}</p>
        <p>Square miles: {state["square-miles"]}</p>
        <p>Time zone 1: {state["time-zone-1"]}</p>
        <p>Time zone 2: {state["time-zone-2"]}</p>
        <p>DST: {state.dst}</p>
        <button onClick={handleBackClick}>Back</button>
      </div>
    );
  };

  return <div>{selectedState ? renderStateDetail() : renderStateList()}</div>;
};

export default State;
