import React, { useEffect, useState } from "react";

export const Users = ({setInfo}) => {
    useEffect(() => {
      console.log(setInfo,"test");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        console.log(data, " data recived from server");
      });
  }, []);
  const [todos, setTodos] = useState(null);
  const showStatus = (status) => {
    if (status === false) {
      return "Incomplete";
    } else {
      return "Completed";
    }
    };
    const showUserInfo = (uid,tid,title) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${uid}`)
        .then((response) => response.json())
        .then((data) => {
        //   setTodos(data);
            console.log(data,setInfo, " data recived for user");
            setInfo({...data,todo:title,tid:tid})
        });
    }
  return (
    <div className="table-section">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Todo ID</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((todo) => {
            return (
              <tr key = {todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{showStatus(todo.completed)}</td>
                <td>
                  <button className="button" onClick={()=>showUserInfo(todo.userId,todo.id, todo.title)}> View User</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
