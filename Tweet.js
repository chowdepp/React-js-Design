import React from "react";
import "./App.css";

function Tweet({name,message,like}){

    return(
        <div className="tweet">
            <h1>{name}</h1>
            <p>{message}</p>
            <h3>{like}</h3>
        </div>
      

    );


    }

    export default Tweet;