import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-car-alt"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Driver Admin</div>
        </Link>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Details</div>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Booking</span>
          </Link>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <Link className="collapse-item" to="/b">
                New Booking Request
              </Link>
              <Link className="collapse-item" to="on_booking">
                Ongoing
              </Link>
              <Link className="collapse-item" to="pending_booking">
                Pending
              </Link>
              <Link className="collapse-item" to="pending_booking">
                Failed
              </Link>
              <Link className="collapse-item" to="completed_booking">
                Completed
              </Link>
              <Link className="collapse-item" to="cards.html">
                Total
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Driver</span>
          </Link>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <Link className="collapse-item" to="/driver_list">
                Driver List
              </Link>
              <Link className="collapse-item" to="/new_driver">
                New Driver Request
              </Link>
              <Link className="collapse-item" to="/add_driver">
                Add Driver
              </Link>

              <Link className="collapse-item" to="/suspended_driver">
                Suspended
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Customer</span>
          </Link>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <Link className="collapse-item" to="/customer_list">
                Customer List
              </Link>
              <Link className="collapse-item" to="/add_customer">
                Add Customer
              </Link>
              <Link className="collapse-item" to="on_booking">
                Blocked Customer
              </Link>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Others</div>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Payments</span>
          </Link>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/payments_completed">
                Completed
              </Link>
              <Link className="collapse-item" to="/payments_pending">
                Pendeing
              </Link>
              <Link className="collapse-item" to="/payments_failed">
                Failed
              </Link>
              <Link className="collapse-item" to="/payments_failed">
                Rate Charts
              </Link>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapsePages1"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Employee</span>
          </Link>
          <div
            id="collapsePages1"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/emp_list">
                List
              </Link>
              <Link className="collapse-item" to="/emp_add">
                Add
              </Link>
              <Link className="collapse-item" to="/emp_suspended">
                Suspended
              </Link>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
    </>
  );
};

export default Menu;
