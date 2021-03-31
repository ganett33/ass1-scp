import React from "react";


function Home()
{
    return(
    <div className="bg-dark">
         <div className="p-5 text-center bg-light text-dark">
               <h1 class="mb-3 fs-1 fw-bolder">SCP-Foundation</h1>
                <img class="img-fluid" src="images/logo.png" alt="SCP Logo" />
               <p class="mb-1 fs-7 fw-bolder"><small>WARNING: THE FOUNDATION DATABASE IS</small></p>
               <p class="mb-4 fs-1 fw-bolder text-danger">CLASSIFIED</p>
               <p class="text-center mt-4 text-secondary">ACCESS BY UNAUTHORIZED PERSONNEL IS STRICTLY PROHIBITED
               <br/>PERPETRATORS WILL BE TRACKED, LOCATED, AND DETAINED</p>                   
         </div>
            <br/>  
            <div class="container ">
          <div class="col-sm-12 col-md-12 ">
             <h3 class="text-center text-white mt-4">SCP Series 1-10</h3>
             <br/>
             <br/>  
         </div>
         </div>
    
    </div>
    )
}


  export default Home;