import React, { useState } from "react";
import PropTypes from "prop-types";

function Row({ rowData, applyChangeName, applyChangeAdres }) {
  console.log(rowData);
  const [isEditingName, setEditingName] = useState(false);
  const [isEditingAdres, setEditingAdres] = useState(false);

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
            value={rowData.name}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                setEditingName(!isEditingName);
              }
            }}
            onChange={e => {
              applyChangeName(e.target.value, rowData.id);
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
            value={rowData.address}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                setEditingAdres(!isEditingAdres);
              }
            }}
            onChange={e => {
              applyChangeAdres(e.target.value, rowData.id);
            }}
          />
        ) : (
          rowData.address
        )}
      </div>
    </div>
  );
}

export default Row;

Row.propTypes = {
  rowData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  }).isRequired,
  applyChangeName: PropTypes.func.isRequired,
  applyChangeAdres: PropTypes.func.isRequired
};
