import React, { useEffect } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Table, Button } from "reactstrap";
import { useState } from "react";
import { MyNav } from "./";
import { useLocation } from "react-router-dom";
import Cross from "../images/cross.svg";

const Lists = (props) => {
  const location = useLocation();
  const [data, setData] = React.useState(location.state ? location.state : []);

  const [qty, setQty] = useState(1);
  const [itemName, setItemName] = useState("");

  const incQnt = (id) => {
    const index = data.findIndex((data) => data.id == id);
    let copyData = [...data];
    copyData[index]["quantity"] = copyData[index]["quantity"] + 1;
    setData(copyData);
  };

  const decQnt = (id) => {
    const index = data.findIndex((data) => data.id == id);
    let copyData = [...data];
    if (copyData[index]["quantity"] > 1) {
      copyData[index]["quantity"] = copyData[index]["quantity"] - 1;
      setData(copyData);
    }
  };

  const remItem = (index) => {
    data.splice(index, 1);
    let cdData = [...data];
    setData(cdData);
  };

  const onSubmit = () => {
    setData((prev) => [
      ...prev,
      {
        id: data.length + 1,
        name: itemName,
        quantity: qty,
      },
    ]);
  };

  return (
    <div>
      <MyNav expand="sm" invet1={data} />
      <div>
        <h2 className="App-header">Edit List</h2>
        <div className="d-flex justify-content-center">
          <Card className="w-50">
            <CardHeader></CardHeader>
            <CardBody>
              <h6 style={{ float: "left" }}>Item Name *</h6>
              <h6 style={{ float: "right" }}>Quantity *</h6>
              <div className="d-flex mt-5">
                <input
                  placeholder="Please Enter Item Name"
                  id="name"
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setItemName(e.target.value);
                  }}
                  value={itemName}
                />
                <input
                  min={1}
                  id="qty"
                  type="number"
                  className="form-control"
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                  value={qty}
                />
                <Button onClick={onSubmit}>ADD</Button>
              </div>

              <Table striped className="w-100">
                <thead>
                  <h6 className="mt-4" style={{ float: "left" }}>
                    Inventory List
                  </h6>
                  <tr>
                    <th>#</th>
                    <th>Item Name</th>
                    <th>Qty</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {data &&
                    data.map((item, index) => (
                      <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td d-flex>
                          Quantity:{item.quantity}
                          <input
                            onClick={(e) => incQnt(item.id, e)}
                            type="button"
                            value="+"
                            class="button-plus border rounded-circle icon-shape icon-sm mx-2"
                            data-field="quantity"
                          />
                          <input
                            onClick={(e) => decQnt(item.id, e)}
                            type="button"
                            value="-"
                            class="button-plus border rounded-circle  icon-shape icon-sm mx-1 "
                            data-field="quantity"
                          ></input>
                        </td>
                        <Button onClick={(e) => remItem(index, e)}>
                          <img src={Cross}></img>
                        </Button>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </CardBody>

            <Button onClick={() => setData([])}>Clear All</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export { Lists };
