import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
const ContactPage = () => {
  const userState = useSelector((state) => state.handleUserDetails);
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Customer Care</h1>
        <h3>
          Hello, Welcome to FlopKart Shop customer care team. Please write your
          query to us.
        </h3>
        <h3>The wait time to get response is around 3 days</h3>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  readOnly
                  value={userState.userEmail}
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
