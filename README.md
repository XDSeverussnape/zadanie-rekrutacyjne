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
