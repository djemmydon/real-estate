import axios from "axios";
import React, { useState } from "react";

function add() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/property", {
      headers: { "Content-type": "application/json"},
      body: JSON.stringify({
        name,
        image,
        price
      })
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>  
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} required />





        <br />
        <input
          type="file"
          name="src"
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <br></br>
        <input type="text" name="" onChange={(e) => setPrice(e.target.value)} required/>
        <br></br> 

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default add;
  