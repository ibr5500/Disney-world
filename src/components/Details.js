import React from "react";
import axios from "axios";

const Details = () => {
  const fetchdata = async () => {
    const result = await axios('https://api.disneyapi.dev/characters')
    .then(res => res.data.data);
    console.log(result);
  }

  return (
    <div>
      Details
      <button type='button' onClick={fetchdata}>click</button>
    </div>
  );

};

export default Details;
