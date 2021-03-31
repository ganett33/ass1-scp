import React, { Component } from "react";
import scps from "./data.json";



const foundation = scps.map(
   (scps) => {
       return(
            <div>
    
    <div class="album py-5 bg-light">
  <div class="container-md">
  <div class="row gx-5">

    <div class="col-12 ">
      <div class="card shadow-sm">
          <div className="alert-dark">
            <h2 class="card-title p-3" id={scps.id}>Item#: {scps.item}</h2>
          </div>
      <img class="shadow-lg rounded-lg m-lg-4 img-thumbnail m-3" width="400" height="450" src={scps.image} alt="" />
          <div class="card-body">
          <h4 class="card-title">Special Containment Procedures: </h4>          
                          <p class="card-text ">{scps.scp}</p>
                          <h4 class="card-title ">Description: </h4>
                          <p class="card-text ">{scps.des}</p>
                          <h4 class="card-title ">Reference: </h4>
                          <p class="card-text ">{scps.ref}</p>
                          <h4 class="card-title ">Add: </h4>
                          <p class="card-text ">{scps.add}</p>
          </div>
      </div>
  </div>

  </div>
  </div>
  </div>
 
        </div>


        );
      }
  );
  class Stuff extends Component
  {
      render()
      {
          return(
              <div >
                  {foundation}
              </div>
          );
      }
  }
  export default Stuff;