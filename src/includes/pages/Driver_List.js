import React, { useState, useEffect } from "react";

const Customer_List = () => {
  let [driver, setDriver] = useState([]);

  const getData = async () => {
    var resp = await fetch(
      "https://driveradminnode.herokuapp.com/driver/dlist"
    );
    var result = await resp.json();
    setDriver(result);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div class="container-fluid">
        <h1 class="h3 mb-2 text-gray-800">Driver List</h1>
        <p class="mb-4">Showing Driver Details</p>

        <div class="card shadow mb-4 text-center">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Driver Details</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Mail</th>
                    <th>Gender</th>
                    <th>Experience</th>
                    <th>Kyc</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Mail</th>
                    <th>Gender</th>
                    <th>Experience</th>
                    <th>Kyc</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {driver.map((currentElement) => (
                    <tr key={currentElement._id}>
                      <td>{currentElement.fname}</td>
                      <td>{currentElement.lname}</td>
                      <td>{currentElement.phone}</td>
                      <td>{currentElement.mail}</td>
                      <td>{currentElement.gender}</td>
                      <td>{currentElement.experience}</td>
                      <td>{currentElement.kyc}</td>
                      <td>
                        <button className="btn btn-sm btn-primary mx-1 my-2 col-sm-4">
                          View
                        </button>
                        <button className="btn btn-sm btn-warning mx-1 my-2 col-sm-4">
                          Edit
                        </button>
                        <button className="btn btn-sm btn-success mx-1 my-2 col-sm-4">
                          Booking
                        </button>
                        <button className="btn btn-sm btn-danger mx-1 my-2 col-sm-4">
                          Suspend
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer_List;
