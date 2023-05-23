import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailDestinations = () => {
  // Dùng ID để show content trang page riêng về đà nẵng

  const param = useParams();
  const id = param.id;

  useEffect(() => {
    // setIdDestination(id);
    console.log(id);
  }, [id]);

  return (
    id && (
      <div>
        <h1>abc {id} </h1>
      </div>
    )
  );
};

export default DetailDestinations;
