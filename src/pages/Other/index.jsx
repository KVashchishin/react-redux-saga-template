import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import actions from "../../redux/other/actions";

const Other = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.other);

  useEffect(() => {
    if (id) {
      dispatch({ type: actions.GET_DATA, id });
    }
  }, [dispatch, id]);

  const updateData = () => {
    dispatch({ type: actions.UPDATE, value: "updated data" });
  };

  return (
    <>
      <div>Other</div>
      {id && <div onClick={() => updateData()}>{data}</div>}
      <div onClick={() => navigate("/")}>Go back</div>
    </>
  );
};

export default Other;
