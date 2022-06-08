import { render } from '@testing-library/react'
import { useEffect, useState } from 'react'
import './Calendar.css'
import Session from './Session'

const Calendar = () => {
    const [array, setArray] = useState([])

    useEffect(() => {
        setArray(array);
    }, [array])
    // let array = [45]

    const sessionRender = () => {
        console.log(123);

        // let n = 8;
        // do {
        //     const newSession = {
        //         n: n += 2,
        //         id: Math.random().toString().substring(2, 4)
        //     }
        //     setSession([...sessions, newSession.n]);
        //     console.log(newSession.n);

        // } while (n >= 8 && n <= 18)

let k = 8;

do{
    k+=2
    array.push(k)
    setArray([array])
    
}
while( k < 20)

// for (let k = 8; k < 20; k + 2){
//         array.push(k)
// }



    // for (let i = 0; i < array.length; i++) {
    //     console.log(array[i])
    // }

    // }

    // let sesssion = () => {
    //     for (let i = 0; i < array.length; i++) {
    //         console.log(array[i])
    //     }
    }
    
    return (
        <div className="calendar">
            <div className="date" onClick={sessionRender}><div className='content'>1 июня ср</div></div>
            <div className="date"><div className='content'>2 июня чт</div></div>
            <div className="date"><div className='content'>3 июня пт</div></div>
            <div className="date"><div className='content'>4 июня сб</div></div>
            <div className="date"><div className='content'>5 июня вс</div></div>
<div className='array'>
            {array}
            </div>
        </div>

    )
}

export default Calendar;