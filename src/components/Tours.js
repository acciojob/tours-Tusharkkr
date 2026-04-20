import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";

const Tours = () => {

    let [tour, setTour] = useState([])
    let [load, setLoad] = useState(false)
    let [count, setCount] = useState(0)
    let [text, setText] = useState('')

    function tourData() {
        fetch('https://www.course-api.com/react-tours-project')
            .then((res) => res.json())
            .then((ans) => {
                setTour(ans);
                setLoad(true);
                console.log(ans);
            });
    }
    useEffect(() => {
        tourData()
    }, [])

    if (!load) {
        return <Loading />
    }

    // if(count == tour.length){
    //     setText('No tours left')
    // }
    

    return (
        <div className="tours">
            
            {tour.map(value=>(
                <Tour 
                value = {value}
                // count = {count}
                // setCount = {setCount}
                />
            ))}
        </div>
    )
}
export default Tours
