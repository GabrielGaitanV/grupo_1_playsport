import {Component} from "react";

class TableP extends Component {
  constructor(props) {
    super (props);
    this.state = {
      tableRowData: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3007/api/products/')
      .then((response) => response.json())
      .then((products) =>{
        console.log(products);
        this.setState({
          tableRowData: products.data
        });
      });
  }
  render(){
    return(
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Imagen</th>
          </tr> 
        </thead>
        <tbody>

            {this.state.tableRowData.map((row)=>{
              return (
                <tr key={row.product_name}>
                  <td>{row.product_name}</td>
                  <td>{row.product_description}</td>
                  <td>{row.product_price}</td>
                  <td>
                   <img 
                   style={{width: '60%'}}
                   src={"http://localhost:3007" + row.image}
                   /> 
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}

export default TableP;