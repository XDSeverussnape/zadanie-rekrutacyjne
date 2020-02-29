import React, { Component } from "react";
import Row from "./Row";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adres: "",
      clientName: "",
      termName: "",
      termAdres: "",
      data: [
        {
          id: 1,
          name: "Jan Kowalski",
          address: "ul. Testowa 1, Pruszcz Gdanski"
        },
        {
          id: 2,
          name: "Andrzej Nowak",
          address: "ul. Programistow 5 Gdansk"
        },
        { id: 3, name: "Piotr Piotrowski", address: "ul. Wiejska 1, Warszawa" }
      ]
    };

    this.setName = e => {
      this.setState({ clientName: e.target.value });
    };

    this.setAdres = e => {
      this.setState({ adres: e.target.value });
    };

    this.setTermName = e => {
      this.setState({ termName: e.target.value });
    };

    this.setTermAdres = e => {
      this.setState({ termAdres: e.target.value });
    };

    this.addNewItem = () => {
      const index = this.state.data.length + 1;
      const newItem = {
        id: index,
        name: this.state.clientName,
        address: this.state.adres
      };
      this.setState(({ data }) => {
        const newArray = [...data, newItem];
        return { data: newArray, adres: "", clientName: "" };
      });
    };

    this.applyChangeName = (event, id) => {
      this.setState(({ data }) => {
        const newData = data.map(item => {
          if (item.id === id) {
            const regItem = {
              id: id,
              name: event,
              address: item.address
            };
            return { ...regItem };
          }
          return item;
        });
        return { data: newData };
      });
    };

    this.applyChangeAdres = (event, id) => {
      this.setState(({ data }) => {
        const newData = data.map(item => {
          if (item.id === id) {
            const regItem = {
              id: id,
              name: item.name,
              address: event
            };
            return { ...regItem };
          }
          return item;
        });
        return { data: newData };
      });
    };

    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  compareBy(key) {
    return function(a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ data: arrayCopy });
  }

  render() {
    const filteredData = this.state.data.filter(data => {
      let state = true;
      if (
        this.state.termName &&
        !data.name.toLowerCase().includes(this.state.termName.toLowerCase())
      ) {
        state = false;
      }
      if (
        this.state.termAdres &&
        !data.address.toLowerCase().includes(this.state.termAdres.toLowerCase())
      ) {
        state = false;
      }
      return state;
    });
    return (
      <div className="table">
        <div className="header">
          <div
            className="header-item"
            onClick={() => {
              this.sortBy("id");
            }}
          >
            Id
          </div>
          <div className="header-item">
            <div
              className="header-item__block"
              onClick={() => {
                this.sortBy("name");
              }}
            >
              Nazwa klienta
            </div>
            <input
              className="input"
              type="text"
              placeholder="Filtryj klientov"
              value={this.state.termName}
              onChange={this.setTermName}
            />
          </div>
          <div className="header-item">
            <div
              className="header-item__block"
              onClick={() => {
                this.sortBy("address");
              }}
            >
              Adres
            </div>
            <input
              className="input"
              type="text"
              placeholder="Filtryj adresy"
              value={this.state.termAdres}
              onChange={this.setTermAdres}
            />
          </div>
        </div>
        <div className="body">
          {filteredData.map(rowData => (
            <Row
              key={rowData.id}
              rowData={rowData}
              applyChangeName={this.applyChangeName}
              applyChangeAdres={this.applyChangeAdres}
            />
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
            value={this.state.clientName}
            placeholder="Nazwa klienta"
            onChange={this.setName}
          />
          <input
            className="input-form form__item"
            type="text"
            value={this.state.adres}
            placeholder="Adres"
            onChange={this.setAdres}
          />
          <button
            className="button-form form__item"
            onClick={() => {
              if (this.state.clientName === "" || this.state.adres === "") {
                return null;
              } else {
                this.addNewItem();
              }
            }}
          >
            Dodanie nowego rekordu
          </button>
        </form>
      </div>
    );
  }
}
