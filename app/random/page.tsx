'use client';

import { useState, useEffect } from "react"
import { randomIntFromInterval } from "../utils"


// warning: Text content did not match. Server: "Random 9" Client: "Random 5"
 
export default function clientPiece(): React.ReactElement {

    useEffect( ()=> {
        setMyVal( s => randomIntFromInterval(1,9) )

        const t = setInterval( ()=> setMyVal( s => randomIntFromInterval(1,900) ), 2000 )

        return () => clearInterval( t )
    },[] )


    const [myVal, setMyVal] = useState(Number)// randomIntFromInterval(1,9) )

    return (<h1>{`Random ${myVal}`}</h1>)
}  