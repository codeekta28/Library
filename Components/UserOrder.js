import React from "react";
import styles from "../styles/userOrder.module.css";

function UserOrder({name,author,price,qty,status}) {
    console.log(name);
  return (
    <>

    
        <div className="col-md-4">
          <div className={`${styles.card} card`} >
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              <h5 className="card-subtitle mb-2 ">Author-{author}</h5>
              <h6 className="card-subtitle mb-2  ">Bill-Rs {price}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Total-{qty} books</h6>
              <a href="#" className={`${styles.btn} btn mr-2`}>
                <i className="fas fa-link"></i> {status}
              </a>
            </div>
          </div>
        </div>
        </>
  
  );
}

export default UserOrder;
