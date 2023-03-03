import React from "react";
import Card from './Card'
 import D from "./sdata";

const Service = () => {
  return (
    <>
    
      <div className="my-5">
        <h1 className="text-center"> <marquee behavior="90%" direction="">Our Service <span className="saif">my name is Saif </span> <span className="saif2"> my name is Rahul sir</span> </marquee></h1>
      </div>
      <div className="container-flued mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card
                title={D[0].title}
                image={D[0].image}
                
              />
              <Card
                title={D[1].title}
                image={D[1].image} 
              />
              <Card
                title={D[2].title}
                image={D[2].image}
                lorem={D[0].lorem}
              />
              <Card
                title={D[3].title}
                image={D[3].image} 
                lorem={D[0].lorem}
              />
              <Card
                title={D[4].title}
                image={D[4].image} 
                lorem={D[0].lorem}
              />
              <Card 
                title={D[5].title}
                image={D[5].image}
              />
              
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
