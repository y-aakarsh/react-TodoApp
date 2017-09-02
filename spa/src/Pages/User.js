import React from "react";
import "./css/Home.css";
export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.userData = this.props.userData;
  }
  userInfo(data) {
    return (
      <div className="Body-User-Info-Item" key={Object.keys(data)}>
        <div className="Body-User-label">
          {Object.keys(data)}
        </div>
        <div className="Body-User-value">
          {Object.values(data)}
        </div>
<br />
      </div>
    );
  }
  render() {
    const dataH = this.userData.profile.map(data => this.userInfo(data));
    return (
      <div className="Body-User-Info">
        {this.userData.profile.map(data => this.userInfo(data))}
      </div>
    );
  }
}

// console.log(Object.keys(data)[0])
