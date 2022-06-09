import { render } from '@testing-library/react'
import { useEffect, useState } from 'react'
import './Calendar.css'
import Session from './Session'

const Calendar = () => {
    const [array, setArray] = useState([])

    useEffect(() => {
        setArray(array);
    }, [array])

    const sessionRender = () => {

        let k = 8;

        do {
            k += 2
            array.push(k)
            setArray([array])

        }
        while (k < 20.00)

    }
    // let newArray = array.toString().split(',').join('<br>')
    

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