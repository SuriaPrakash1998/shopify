import React,{useState} from 'react'
import Star from './Star';

   function Card({setCartValue}){
  let [toggle,setToggle] = useState(true); 
  return<>  
  <div className="col mb-5">
  <div className="card h-100">
    
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      
      <div className="card-body p-4">
          <div className="text-center">
              
              <h5 className="fw-bolder">Special Item</h5>
              
              $40.00
              {/* <br /> */}
              {/* {cartValue} */}
          </div>
      </div>
     
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
           {
            toggle?
            <button className="btn btn-outline-dark mt-auto" onClick={
              ()=>{setCartValue(prev=>prev+1) 
              setToggle(!toggle)
              // console.log(setCartValue);
            }} >
              Add to Cart
              </button>
              :
              <button className="btn btn-outline-dark mt-auto" onClick={
                ()=>{setCartValue(prev=>prev-1) 
                setToggle(!toggle)
                // console.log(setCartValue);
              }} >
                Remove
                </button>
           }
          </div>
          <div  className="text-center" >
          <Star />
          </div>
      </div>
  </div>
</div>

</>   
}
export default Card