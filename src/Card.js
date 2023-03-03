import React from 'react'
import './card.css';




export const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={props.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p class="card-text">
                     Hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium.
                    </p>
                    <a href='' className="btn">
                      Go to
                    </a>
                  </div>
                </div>
              </div>
    </>
  )
}
export default Card;
