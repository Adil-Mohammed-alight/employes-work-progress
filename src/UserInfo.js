import React from "react";

export default function UserInfo({ info }) {
  const renderInfo = (info) => {
    //    Object.keys(info).map((item) => {
    return (
      <div className="container" >
        <div className="row">
          <div className="h6">Todo ID: {info.tid}</div>
          <div className="h6">Todo Title:  {info.todo}</div>
          <div className="h6">User ID: {info.id}</div>
          <div className="h6">User Name:  {info.name}</div>
          <div className="h6">Email: {info.email}</div>

        </div>
      </div>
    );

    //    })
  };
  return (
    <div className="info-box ">
      {!!info ? renderInfo(info) : "noinfo found"}
    </div>
  );
}
