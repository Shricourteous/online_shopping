import React, { useEffect, useState } from 'react'
import './testpage.style.scss'


const TestPage = () => {

    const [count, setcount] = useState(0)
    const [timer, settimer] = useState(0)

    let incr = 0;

    console.log("WHole component redered")

    useEffect(()=>{
        incr = incr + 1;
        console.log(` Use Effect of count ran ${incr} times`);
        return (
            console.log("return rans in exiting")
        )

    }, [count])

    useEffect(()=>{
        console.log(" Use Effect of timer ran ")
    }, [timer])

    return (
        <>
            <h1> Playground</h1>

            <h1 >{count}</h1>
            <button onClick={() => {setcount(count + 1)}}>+</button>
            <button onClick={() => setcount(count - 1)}>--</button>
            <br />

            <h1 >{timer}</h1>
            <button onClick={() => settimer(timer + 1)}>+</button>
            <button onClick={() => settimer(timer - 1)}>--</button>
        </>
    );
}

export default TestPage