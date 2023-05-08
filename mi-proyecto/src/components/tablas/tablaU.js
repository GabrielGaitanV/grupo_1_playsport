import {Component} from "react";

 class TableU extends Component {
  constructor(props) {
    super (props);
    this.state = {
      tableRowData: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3007/api/users/')
      .then((response) => response.json())
      .then((users) =>{
        console.log(users);
        this.setState({
          tableRowData: users.users
        });
      });
  }
  render(){
    return(
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>emial</th>
            <th>Imagen</th>
          </tr> 
        </thead>
        <tbody>

            {this.state.tableRowData.map((row)=>{
              return (
                <tr key={row.first_name}>
                  <td>{row.first_name}</td>
                  <td>{row.last_name}</td>
                  <td>{row.user_email}</td>
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

 export default TableU;