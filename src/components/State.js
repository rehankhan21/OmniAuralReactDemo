import React from "react";
import { useSelector, useDispatch } from "react-redux";
import statesData from "../json/states.json";
import { Button, ListGroup } from "react-bootstrap";

const State = () => {
  const selectedState = useSelector((state) => state.selectedState);
  const dispatch = useDispatch();

  const handleStateClick = (state) => {
    dispatch({ type: "SELECT_STATE", payload: state });
  };

  const handleStateResetClick = () => {
    dispatch({ type: "DESELECT_STATE" });
  };

  const displayStateList = () => {
    return statesData.statesInfo.states.map((state) => (
      <ListGroup
        key={state["@attributes"].abbreviation}
        onClick={() => handleStateClick(state)}
      >
        <ListGroup.Item> {state["@attributes"].name}</ListGroup.Item>
      </ListGroup>
    ));
  };

  const displayStateDetail = () => {
    const state = selectedState["@attributes"];
    const flagUrl = `https://www.50states.com/images/redesign/flags/${state[
      "abbreviation"
    ].toLowerCase()}-largeflag.png`;

    return (
      <ListGroup>
        <ListGroup.Item>
          <h2>{state.name}</h2>
        </ListGroup.Item>
        <ListGroup.Item>
          <img src={flagUrl} alt={`${state.name} flag`} />
        </ListGroup.Item>
        <ListGroup.Item>Abbreviation: {state.abbreviation}</ListGroup.Item>
        <ListGroup.Item>Capital: {state.capital}</ListGroup.Item>
        <ListGroup.Item>
          Most populous city: {state["most-populous-city"]}
        </ListGroup.Item>
        <ListGroup.Item>Population: {state.population}</ListGroup.Item>
        <ListGroup.Item>Square miles: {state["square-miles"]}</ListGroup.Item>
        <ListGroup.Item>Time zone 1: {state["time-zone-1"]}</ListGroup.Item>
        <ListGroup.Item>Time zone 2: {state["time-zone-2"]}</ListGroup.Item>
        <ListGroup.Item>DST: {state.dst}</ListGroup.Item>
        <ListGroup.Item>
          <Button variant="dark" onClick={handleStateResetClick}>
            Back
          </Button>
        </ListGroup.Item>
      </ListGroup>
    );
  };

  return <div>{selectedState ? displayStateDetail() : displayStateList()}</div>;
};

export default State;
