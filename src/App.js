import logo from "./logo.svg";
import "./App.css";

import { Users } from "./Users";
import UserInfo from "./UserInfo";
import React,{useState} from 'react'
function App() {
  const [userInfo, setUserInfo] = useState(null)
  return (
    <div className="container-fluid">
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 list-section">
            <div className="container">
              <div className="row search-row">
                <div className="col-md-6">
                  <div className="h5">Todo</div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="search-con" style={{ width: "200px" }}>
                    <input
                      type="text"
                      className="input br-6"
                      placeholder="search"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <Users setInfo={setUserInfo}/>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container">
              <div className="row">
                <div className="col-md-12 position-relative">
                  <div className="h5 " > User Detail</div>
                  <UserInfo info={userInfo}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
