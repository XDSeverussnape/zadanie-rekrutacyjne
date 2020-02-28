import React, { useState } from "react";

function Row({ rowData, applyChangeName, applyChangeAdres }) {
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
            className="input"
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
            className="input"
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
