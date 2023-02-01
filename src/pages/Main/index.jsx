import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Main = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "main/GET_DATA" });
  }, [dispatch]);

  return (
    <>
      <div>Main</div>
      <div onClick={() => navigate("/other")}>Go to other</div>
    </>
  );
};

export default Main;
