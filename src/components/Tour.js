import React, { useState } from "react";


const Tour = ({ value }) => {

    let [showmore, setShowmore] = useState(true)
    

    return (
        <div className="Tour" style={{ width: '20vw', height: '80vh' }}>
            <img src={value.image} width='100%' />
            <h1>Name : {value.name}</h1>
            <h2>price : {value.price}</h2>
            {showmore ? <p id={`tour-item-para-${value.id}`} >Info : {value.info.slice(0, 200)}.....</p> : <p id={`delete-btn-${value.id}`}>Info : {value.info}</p>}
            {showmore ? <button id={`see-more-${value.id}`} onClick={() => setShowmore(false)}>See more</button> : <button id={`delete-btn-${value.id}`} onClick={() => setShowmore(true)}>Show less</button>}
            <button id={`delete-btn-${value.id}`} onClick={(e) => {
                e.target.parentElement.remove()
            }}>Remove Tour</button>
        </div>
    )
}
export default Tour
