import React, { Component } from "react";
import Row from "./Row";
import { connect } from "react-redux";
import {
  setClientName,
  setAdres,
  addNewCharacter,
  setTermName,
  setTermAdres,
  sortBy
} from "./action/action";

class Table extends Component {
  render() {
    console.log(this.props);
    const filteredData = this.props.data.filter(data => {
      let state = true;
      if (
        this.props.termName &&
        !data.name.toLowerCase().includes(this.props.termName.toLowerCase())
      ) {
        state = false;
      }
      if (
        this.props.termAdres &&
        !data.address.toLowerCase().includes(this.props.termAdres.toLowerCase())
      ) {
        state = false;
      }
      return state;
    });
    this.props.setFilerabledData(filteredData);
    return (
      <div className="table">
        <div className="header">
          <div
            className="header-item"
            onClick={() => {
              this.props.sortBy("id");
            }}
          >
            Id
          </div>
          <div className="header-item">
            <div
              className="header-item__block"
              onClick={() => {
                this.props.sortBy("name");
              }}
            >
              Nazwa klienta
            </div>
            <input
              className="input-filter"
              type="text"
              placeholder="Filtryj klientov"
              value={this.props.termName}
              onChange={e => {
                this.props.setTermName(e.target.value);
              }}
            />
          </div>
          <div className="header-item">
            <div
              className="header-item__block"
              onClick={() => {
                this.props.sortBy("address");
              }}
            >
              Adres
            </div>
            <input
              className="input-filter"
              type="text"
              placeholder="Filtryj adresy"
              value={this.props.termAdres}
              onChange={e => {
                this.props.setTermAdres(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="body">
          {filteredData.map(rowData => (
            <Row key={rowData.id} rowData={rowData} />
          ))}
        </div>
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            className="input-form form__item"
            type="text"
            value={this.props.clientName}
            placeholder="Nazwa klienta"
            onChange={e => {
              this.props.setClientName(e.target.value);
            }}
          />
          <input
            className="input-form form__item"
            type="text"
            value={this.props.adres}
            placeholder="Adres"
            onChange={e => {
              this.props.setAdres(e.target.value);
            }}
          />
          <button
            className="button-form form__item"
            onClick={() => {
              if (this.props.clientName === "" || this.props.adres === "") {
                return null;
              } else {
                this.props.addNewCharacter();
              }
              this.props.setAdres("");
              this.props.setClientName("");
            }}
          >
            Dodanie nowego rekordu
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    filterablData: store.filterablData,
    data: store.data,
    adres: store.adres,
    clientName: store.clientName,
    termName: store.termName,
    termAdres: store.termAdres
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilerabledData: filteredData => {
      dispatch(setFilerabledData(filteredData));
    },
    setClientName: inputTextClientName => {
      dispatch(setClientName(inputTextClientName));
    },
    setAdres: inputTextAdres => {
      dispatch(setAdres(inputTextAdres));
    },
    addNewCharacter: () => {
      dispatch(addNewCharacter());
    },
    setTermName: inputTextTermName => {
      dispatch(setTermName(inputTextTermName));
    },
    setTermAdres: inputTextTermAdres => {
      dispatch(setTermAdres(inputTextTermAdres));
    },
    sortBy: text => {
      dispatch(sortBy(text));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
