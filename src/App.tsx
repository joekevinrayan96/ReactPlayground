import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getUsers } from "./features/users/userSlice";
import { countAction } from "./store/count-slice";

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootStateOrAny) => state.users);
  const count = useSelector((state: RootStateOrAny) => state.counter.count);

  useEffect(() => {
    setTimeout(() => {
      dispatch(countAction.countReducer());
    }, 1000);

    // console.log(countAction.countReducer(num));
  });

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, [dispatch]);

  return (
    <>
      <p>counter {count}</p>
      <h1 style={{ textAlign: "center" }}>
        Welcome to React Redux Toolkit Crash Course
      </h1>

      {users &&
        users.map((user: any, i: number) => <h1 key={i}>{user.name}</h1>)}
    </>
  );
}

export default App;
