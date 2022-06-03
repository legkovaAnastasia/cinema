import { useState } from 'react';
import './Calendar.css'
import Session from './Session'

const Calendar = () => {

    const [sessions, setSession] = useState([]);

    let films = ['Зеленая миля', 'Список Шиндлера', 'Побег из Шоушенка', 'Властелин колец: Возвращение короля',
        'Форрест Гамп', 'Властелин колец: Две крепости', 'Властелин колец: Братство Кольца'];
    let n = 10;

    const sessionRender = () => {

        // do {
        //     const newSession = {
        //         time: n += 2,
        //         timeId: Math.random().toString().substring(2, 4),
        //         filmName: films[0]
        //     }
        //     films.shift();
        //     setSession([sessions, newSession]);
        // }
        // while (n >= 10 && n < 20);
        // console.log(n);

        if (n >= 10 && n < 20) {
            const newSession = {
                time: n += 2,
                timeId: Math.random().toString().substring(2, 4),
                filmName: films[0]
            }
            films.shift();
            setSession([...sessions, newSession]);
            console.log(sessions.length);
        }

        sessions.map(session => {
            return (
                <Session session={session} key={session.timeId} />
            )
        })
    }


    return (
        <div className="calendar">
            <div className="date" onClick={sessionRender}><div className='content'>1 июня ср</div></div>
            <div className="date"><div className='content'>2 июня чт</div></div>
            <div className="date"><div className='content'>3 июня пт</div></div>
            <div className="date"><div className='content'>4 июня сб</div></div>
            <div className="date"><div className='content'>5 июня вс</div></div>
        </div>
    )
}

export default Calendar;