import React, { Component } from "react";
import scps from "./data.json";


const foundation = scps.map(
   (scps) => {
       return(
        <div>

        <section class="mt-4">
         <div class="container">
          <div className="card" >
                 <div className="card-header" id={scps.id}>
                 <h2 class="card-title" >Item#: {scps.item}</h2>
                 </div>
                 <div class="card-body ">
             <img class="img-fluid shadow-lg rounded-lg mb-3" src={scps.image} alt="" />
                           <h4 class="card-title">Special Containment Procedures:</h4>
                           <p class="card-text ">{scps.scp}</p>
                           <h4 class="card-title ">Description: </h4>
                           <p class="card-text ">{scps.des}</p>
                           <h4 class="card-title ">Reference: </h4>
                           <p class="card-text ">{scps.ref}</p>
                           <h4 class="card-title ">Add: </h4>
                           <p class="card-text ">{scps.add}</p>  
          </div>
          <div className="card-footer text-primary">
                <p className="card-text text-center text-dark">SCP Series 1-10</p>       
          </div>     
       </div>  
       </div>       
    <br></br>
 
     </section>    
    </div>
        );
      }
  );
  class Content extends Component
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
  export default Content;