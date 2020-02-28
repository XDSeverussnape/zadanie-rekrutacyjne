const Row = ({ id, name, address }) => (

  <div className="row">
    <div>{id}</div>
    <div>{name}</div>
    <div>{address}</div>
  </div>
);

class Table extends React.Component {
constructor(props) {
super(props);
this.state = {
data: [
{
id: 1,
name: "Jan Kowalski",
address: "ul. Testowa 1, Pruszcz Gdański"
},
{ id: 2, name: "Andrzej Nowak", address: "ul. Programistów 5 Gdańsk" },
{ id: 3, name: "Piotr Piotrowski", address: "ul. Wiejska 1, Warszawa" }
]
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
const rows = this.state.data.map(rowData => <Row {...rowData} />);
this.setState();
return (
<div className="table">
<div className="header">
<div>Id</div>
<div>Nazwa klienta</div>
<div>Adres</div>
</div>
<div className="body">{rows}</div>
</div>
);
}
}

ReactDOM.render(<Table />, document.getElementById("app"));
