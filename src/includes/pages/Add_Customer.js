import React, { useState } from "react";
import { Link } from "react-router-dom";

const Add_Customer = () => {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [phone, setPhone] = useState("");
  let [mail, setMail] = useState("");
  let [password, setPassword] = useState("");
  let [cpassword, setcPassword] = useState("");
  let [isErr, setIsErr] = useState(false);
  let [isCorrect, setIsCorrect] = useState(false);

  return (
    <>
      {isErr ? (
        <div class="alert alert-danger">
          <strong>Error!</strong> Invalid Login!
        </div>
      ) : (
        ""
      )}
      {isCorrect ? (
        <div class="alert alert-success">
          <strong>Succesfull!</strong> Login!
        </div>
      ) : (
        ""
      )}
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Create an Account!
                    </h1>
                  </div>
                  <form className="user">
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
                    <button
                      type="button"
                      className="btn btn-primary btn-user btn-block"
                      onClick={async () => {
                        var fd = new FormData();
                        fd.append("fname", fname);
                        fd.append("lname", lname);
                        fd.append("phone", phone);
                        fd.append("mail", mail);
                        fd.append("password", password);
                        fd.append("cpassword", cpassword);

                        var result = await fetch(
                          "https://driveradminnode.herokuapp.com/customer/cadd",
                          {
                            method: "POST",
                            body: fd,
                          }
                        );
                        var data = await result.json();
                        console.log(result);
                        if (data.err == "Invalid") {
                          setIsCorrect(false);
                          setIsErr(true);
                        } else {
                          setIsErr(false);
                          setIsCorrect(true);
                        }
                      }}
                    >
                      Register Customer
                    </button>
                    <hr />
                    <Link to="" className="btn btn-google btn-user btn-block">
                      <i className="fab fa-google fa-fw"></i> Register with
                      Google
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
    </>
  );
};

export default Add_Customer;
