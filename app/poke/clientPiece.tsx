/*
'use client';

import { useState } from "react"
import { randomIntFromInterval } from "../utils"


// warning: Text content did not match. Server: "Random 9" Client: "Random 5"
 
export default function clientPiece(): React.ReactElement {
    const [myVal, setMyVal] = useState( randomIntFromInterval(1,9) )

    return (<h1>{`Random ${myVal}`}</h1>)
}   
*/