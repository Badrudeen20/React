import React, { useEffect, useState } from "react";
import HOC from "../../class/components/Hoc";

const UsersList = ({ data }) => {
  /* const [list,setList] = useState([])
  useEffect(async ()=>{
     const res  = await fetch(`https://jsonplaceholder.typicode.com/users`)
     const useList = await res.json()
     setList(useList)
  },[list]) */
  let renderUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });
  return (
    <div>
      <div>{renderUsers}</div>
    </div>
  );
};

const SearchUsers = HOC(UsersList, "users");

export default SearchUsers;