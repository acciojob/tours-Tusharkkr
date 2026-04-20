import React, { useState } from "react";

// { value , setCount, count}
const Tour = ({ value }) => {

    let [showmore, setShowmore] = useState(true)
    

    return (
        <div className="Tour" style={{ width: '20vw', height: '80vh' }}>
            <img src={value.image} width='100%' />
            <h1>Name : {value.name}</h1>
            <h2>price : {value.price}</h2>
            {showmore ? <p>Info : {value.info.slice(0, 200)}.....</p> : <p>Info : {value.info}</p>}
            {showmore ? <button onClick={() => setShowmore(false)}>Show more</button> : <button onClick={() => setShowmore(true)}>Show less</button>}
            <button onClick={(e) => {
                e.target.parentElement.remove()
            }}>Remove Tour</button>
        </div>
    )
}
export default Tour
