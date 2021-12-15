import React, { useState } from "react";
import { Link } from "react-router-dom";

const Add_Driver = () => {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [phone, setPhone] = useState("");
  let [mail, setMail] = useState("");
  let [password, setPassword] = useState("");
  let [cpassword, setcPassword] = useState("");
  let [gender, setGender] = useState("");
  let [kyc, setKyc] = useState("");
  let [experience, setExperience] = useState("");
  let [carType, setCarType] = useState("");

  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form className="user ">
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="exampleFirstName"
                        placeholder="First Name"
                        onChange={(event) => {
                          setFname(event.target.value);
                        }}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="exampleLastName"
                        placeholder="Last Name"
                        onChange={(event) => {
                          setLname(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="exampleInputPhone"
                        placeholder="Phone"
                        onChange={(event) => {
                          setPhone(event.target.value);
                        }}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="email"
                        className="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Email Address"
                        onChange={(event) => {
                          setMail(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="exampleRepeatPassword"
                        placeholder="Repeat Password"
                        onChange={(event) => {
                          setcPassword(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-4">
                      <select
                        className=" form-control"
                        id="exampleGender"
                        placeholder="Gender"
                        onChange={(event) => {
                          setGender(event.target.value);
                        }}
                      >
                        <option value="">-Gender-</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                      </select>
                    </div>
                    <div className="col-sm-4">
                      <select
                        type="text"
                        className="form-control"
                        id="exampleExperience"
                        placeholder="Experience"
                        onChange={(event) => {
                          setExperience(event.target.value);
                        }}
                      >
                        <option value="">-Experience-</option>
                        <option value="1">&lt; 1 YEAR</option>
                        <option value="2">1-2 YEAR</option>
                        <option value="3">2-3 YEAR</option>
                        <option value="4">3-4 YEAR</option>
                        <option value="5">4-5 YEAR</option>
                        <option value="6">&gt; 5 YEAR</option>
                      </select>
                    </div>
                    <div className="col-sm-4">
                      <select
                        className="form-control "
                        id="exampleCarType"
                        placeholder="CarType"
                        onChange={(event) => {
                          setCarType(event.target.value);
                        }}
                      >
                        <option value="">-CarType-</option>
                        <option value="small">Mini</option>
                        <option value="medium">Sedan</option>{" "}
                        <option value="large">Luxury</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="exampleRepeatPassword"
                        placeholder="Kyc"
                        onChange={(event) => {
                          setKyc(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-user btn-block"
                    onClick={async () => {
                      var fd = new FormData();
                      fd.append("fname", fname);
                      fd.append("lname", lname);
                      fd.append("phone", phone);
                      fd.append("mail", mail);
                      fd.append("password", password);
                      fd.append("cpassword", cpassword);
                      fd.append("gender", gender);
                      fd.append("experience", experience);
                      fd.append("carType", carType);
                      fd.append("kyc", kyc);

                      var result = await fetch(
                        "https://driveradminnode.herokuapp.com/driver/dadd",
                        {
                          method: "POST",
                          body: fd,
                        }
                      );
                      var data = await result.json();
                      console.log(result);
                    }}
                  >
                    Register Customer
                  </button>
                  <hr />
                  <Link to="" className="btn btn-google btn-user btn-block">
                    <i className="fab fa-google fa-fw"></i> Register with Google
                  </Link>
                  <Link to="" className="btn btn-facebook btn-user btn-block">
                    <i className="fab fa-facebook-f fa-fw"></i> Register with
                    Facebook
                  </Link>
                </form>
                <hr />
                <div className="text-center">
                  <Link className="small" to="forgot-password.html">
                    Forgot Password?
                  </Link>
                </div>
                <div className="text-center">
                  <Link className="small" to="login.html">
                    Already have an account? Login!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_Driver;
