import React from "react";
import userData from "../store/Store.js";

import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import UserInfo from "../Pages/User";

export default class Information extends React.Component {
  constructor() {
    super();
    this.state = {
      user: userData.getAll()
    };
  }
  render() {
    return (
      <div>
        <Header />
        {/* <UserInfo userData={this.state.user} /> */}
        {/* <Posts />  */}
        <Footer />
      </div>
    );
  }
}
