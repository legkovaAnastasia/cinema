import { render } from '@testing-library/react'
import { useEffect, useState } from 'react'
import './Calendar.css'
import Session from './Session'

const Calendar = () => {
    const [isActive, setActive] = useState(false);
    // const [isActive, setActive] = useState()

    // useEffect(() => {
    //     setArray(array);
    // }, [array])


    // setSession(false)
    const sessionRender = () => {
        
        setActive(!isActive)
        
    }


    return (
        <div className="calendar">
            <div className="date" onClick={sessionRender}>
                <div className='content'>
                    1 июня ср
                </div>
                {/* <div> {isActive ? <Session /> : null} </div> */}
<Session/>
            </div>
            <div className="date"><div className='content'>2 июня чт</div></div>
            <div className="date"><div className='content'>3 июня пт</div></div>
            <div className="date"><div className='content'>4 июня сб</div></div>
            <div className="date"><div className='content'>5 июня вс</div></div>
            <div className='array'>
            </div>
        </div>

    )
}

export default Calendar;