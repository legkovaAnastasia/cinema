import { useState } from 'react';
import './Calendar.css'
import Session from './Session'

const Calendar = () => {

    const [sessions, setSession] = useState([]);


    const sessionRender = () => {

        
        let n = 8;
        do{
            n += 2;
sessions.push(n)
setSession();
        } while (n >= 8 && n <= 18)
console.log(sessions);

    }

    return (
        <div className="calendar">
            <div className="date" onClick={sessionRender}><div className='content'>1 июня ср</div></div>
            <div className="date"><div className='content'>2 июня чт</div></div>
            <div className="date"><div className='content'>3 июня пт</div></div>
            <div className="date"><div className='content'>4 июня сб</div></div>
            <div className="date"><div className='content'>5 июня вс</div></div>
         {   sessions.map((session) => {
            return (
                <Session session={session}  />
            )
        })}
        </div>
        
    )
}

export default Calendar;