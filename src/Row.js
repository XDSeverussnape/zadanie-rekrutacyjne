import React, { useState, Component } from "react";
import { connect } from "react-redux";
import {
  applyChangeName,
  applyChangeAdres,
  setInputName,
  setInputAdres
} from "./action/action";

function Row(props) {
  const { rowData, applyChangeName, applyChangeAdres } = props;
  const [isEditingName, setEditingName] = useState(false);
  const [isEditingAdres, setEditingAdres] = useState(false);
  const [valueName, setValueName] = useState(rowData.name);
  const [valueAdres, setValueAdres] = useState(rowData.address);

  return (
    <div className="row">
      <div className="row-item">{rowData.id}</div>
      <div
        className="row-item"
        onDoubleClick={() => {
          setEditingName(!isEditingName);
        }}
      >
        {isEditingName ? (
          <input
            className="input-open__reData"
            value={valueName}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                applyChangeName(valueName, rowData.id);
                setEditingName(!isEditingName);
              }
            }}
            onChange={e => {
              setValueName(e.target.value);
            }}
          />
        ) : (
          rowData.name
        )}
      </div>
      <div
        className="row-item"
        onDoubleClick={() => {
          setEditingAdres(!isEditingAdres);
        }}
      >
        {isEditingAdres ? (
          <input
            className="input-open__reData"
            value={valueAdres}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                setEditingAdres(!isEditingAdres);
                applyChangeAdres(e.target.value, rowData.id);
              }
            }}
            onChange={e => {
              setValueAdres(e.target.value);
            }}
          />
        ) : (
          rowData.address
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    applyChangeName: (inputText, id) => {
      dispatch(applyChangeName(inputText, id));
    },
    applyChangeAdres: (inputText, id) => {
      dispatch(applyChangeAdres(inputText, id));
    },
    setInputName: (inputText, id) => {
      dispatch(setInputName(inputText, id));
    },
    setInputAdres: inputInputTermAdres => {
      dispatch(setInputAdres(inputInputTermAdres));
    }
  };
};

export default connect(undefined, mapDispatchToProps)(Row);
