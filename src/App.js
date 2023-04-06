import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [data, setdata] = useState([]);

  function HandleName(e) {
    setName(e.target.value);
  }
  function HandleEmail(e) {
    setEmail(e.target.value);
  }
  function HandleNumber(e) {
    setNumber(e.target.value);
  }
  function HandleSubmit() {
    if (name !== "" && email !== "" && number !== "") {
      setdata([
        ...data,
        {
          id: nanoid(),
          name: name,
          email: email,
          number: number,
        },
      ]);
      setName("");
      setEmail("");
      setNumber("");
    }

    // console.log(data)
  }

  function HandleDelete(detail) {
    setdata(data.filter((r) => r.id !== detail.id));
  }
  return (
    <>
      <div>
        name:{" "}
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={HandleName}
        />
        <br />
        email:
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={HandleEmail}
        />
        <br />
        number:
        <input
          type="number"
          placeholder="number"
          value={number}
          onChange={HandleNumber}
        />
        <br/>
        <button onClick={HandleSubmit}>submit</button>
      </div>

      <div>
        {data?.map((detail) => (
          <>
          <div style={{backgroundColor:"red"}}>
            <h3>{detail.name}</h3>
            <p>{detail.email}</p>
            <p>{detail.number}</p>
            <button onClick={() => HandleDelete(detail)}>delete</button>
            </div>
          </>
        ))}
      </div>
    
    </>
  );
}
