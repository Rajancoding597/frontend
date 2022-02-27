import React, { useRef, useState, useEffect } from "react";
import Image from "../Image";
import "./Mainpage.css";
import {db} from "../firebase-config";
import {collection, GeoPoint, getDocs} from "firebase/firestore";
import { async } from "@firebase/util";
import {
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Mainpage() {
  var imagee;


  


  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    var lat="30.361230"
    var longi="76.457856"
    navigator.geolocation.getCurrentPosition((pos) => {
        lat = String(pos.coords.latitude)
        longi = String(pos.coords.longitude)

      // console.log(pos.coords.latitude);
      // console.log(pos.coords.longitude);
    });
    // var loc = new GeoPoint(lat,longi);
    // console.log(newName);
    // console.log(newAge);
    // console.log(loc);
    await addDoc(usersCollectionRef, { description: newName, quantity: newAge, latitude: lat,longitude:longi, image: imagee });

  };

 
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     lat = pos.coords.latitude
  //     longi = pos.coords.longitude

  //     console.log(pos.coords.latitude);
  //     console.log(pos.coords.longitude);
  //   });
  // }, []);

  let form = new FormData();
  const onFileChnage = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      form.append("file", e.target.files[0]);
      imagee = e.target.files[0].name;
    }
    console.log(form);
  };
  const ref = useRef();
  const reset = () => {
    ref.current.value = "";
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, age, weight);
    setName("");
    setAge("");
    setWeight("");
  };

  

  return (
    <>
      <div className="center">
        <div className="container">
          <form action="#">
            <div className="data">
              <label>Description</label>
              <input type="text" required onChange={(event) =>{
                setNewName(event.target.value);
              }}/>
            </div>
            <div className="data">
              <label>Expected Quantity </label>
              <input placeholder="(low/high/medium)" type="text" required  onChange={(event) =>{
                setNewAge(event.target.value);
              }} />
            </div>
            <div className="dataImage">
              <label>Upload Image File</label>
              <br />
              <input  onChange={onFileChnage}type="file" required />
            </div>

            <div className="btn">
              <div className="inner"></div>
              <button onClick={createUser} type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Mainpage;
