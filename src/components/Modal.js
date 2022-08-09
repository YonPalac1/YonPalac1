import React from "react";
import { useDispatch } from "react-redux";
import { modalChange } from "../redux/dataReducer";
import { Card } from "./Card";

export const Modal = () => {
  const dispatch = useDispatch();

  const handleSelected = () => {
    dispatch(modalChange(false));
  };

  return (
      <div className="card-center">
        <div className="backdrop" onClick={handleSelected}></div>
        <Card />
      </div>
  );
};
