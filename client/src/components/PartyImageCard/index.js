import React, { useState, useEffect } from "react";
import { Card, Table, Button, Modal, Form } from "react-bootstrap";
import API from "../../utils/API";
import { useAuth } from "../contexts/AuthContext";

const styles = {
  SASDetail: {
    backgroundColor: "#8dc6bf",
  },
  button: {
    backgroundColor: "#99658A",
    borderColor: "#99658A",
    fontWeight: "bold",
    fontSize: "18px",
    width: "200px",
    height: "45px",
  },
  formControl: {
    width: "300px",
    margin: "auto",
    marginTop: "20px",
  },
  tButton: {
    backgroundColor: "#99658A",
    borderColor: "#99658A",
    fontWeight: "bold",
    fontSize: "18px",
    },
    image: {
      
    },
    fileBtn: {
        
    }
};
// props needed: partyId / creator / image
function AttendeeDetailCard(props) {
    const { currentUser } = useAuth();
console.log(props)
    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
        // setLoading(true);
    
        const res = await fetch("https://api.cloudinary.com/v1_1/" + process.env.REACT_APP_CLOUDINARY_TOKEN + "/image/upload", {
          method: "POST",
          body: data
        })
    
        const file = await res.json()
    
        console.log(file)
    
        addImage(file);

      };

    const addImage = (file) => {
        console.log(file)
        console.log(props.partyId)
        API.updateParty(props.partyId, {
            image: file.secure_url
        }).then(res => {
            console.log(res)
        })
        props.getPartyData();
      }

  return (
    <Card style={styles.SASDetail}>
      <Card.Body>
              {props.image ? (
                  <img src={props.image} style={styles.image}/>
        ): "" }
              {(currentUser.uid === props.creator && props.image.length < 1) ? (
                  <div className="App">
                  <input
                      type="file"
                      name="file"
                      placeholder="Upload an image"
                          onChange={uploadImage}
                          style={styles.fileBtn}
                  />
              </div>):""}
      </Card.Body>
    </Card>
  );
}

export default AttendeeDetailCard;