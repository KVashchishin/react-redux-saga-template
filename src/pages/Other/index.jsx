import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const Other = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch({ type: "other/GET_DATA", id });
    }
  }, [dispatch]);

  return (
    <>
      <div>Other</div>
      <div onClick={() => navigate("/")}>Go back</div>
    </>
  );
};

export default Other;
