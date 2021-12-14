import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "./includes/Top";
import Menu from "./includes/Menu";
import Footer from "./includes/Footer";
import Dashboard from "./includes/pages/Dashboard";
import Not_Found from "./includes/pages/Not_Found";
import Booking_List from "./includes/pages/Booking_List";
import Customer_List from "./includes/pages/Customer_List";
import Driver_List from "./includes/pages/Driver_List";
import Add_Customer from "./includes/pages/Add_Customer";
import Add_Driver from "./includes/pages/Add_Driver";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div id="wrapper">
          <Menu />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Top />
              <Switch>
                <Route exact path="/" component={Booking_List} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/customer_list" component={Customer_List} />
                <Route exact path="/driver_list" component={Driver_List} />
                <Route exact path="/add_customer" component={Add_Customer} />
                <Route exact path="/add_driver" component={Add_Driver} />
                <Route component={Not_Found} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
