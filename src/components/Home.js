import React from "react";
import { Table, Button } from "reactstrap";
import { Lists } from "./Lists";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MyNav } from "./";

const Home = (props) => {
  const location = useLocation();
  const [inventory, setInventory] = React.useState(location.state);
  const navigate = useNavigate();
  const btn_handler = () => {
    navigate("/lists", { state: inventory });
  };
  return (
    <div>
      <MyNav expand="sm" invet={inventory}/>

      <div>
        <h2 className="App-header">Inventory List</h2>
        <div className="d-flex justify-content-center">
          <Table striped className="w-50">
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {inventory &&
                inventory.map((item, idx) => {
                  return (
                    <tr>
                      <th scope="row">{idx + 1}</th>

                      <td>{item.name}</td>

                      <td>{item.quantity}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
        <Button onClick={btn_handler}>Edit List</Button>
      </div>
    </div>
  );
};
export { Home };
