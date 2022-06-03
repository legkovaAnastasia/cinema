import './Session.css'

const Session = ({session}) => {

    // const [sessions, setSession] = useState([]);

    // let films = ['Зеленая миля', 'Список Шиндлера', 'Побег из Шоушенка', 'Властелин колец: Возвращение короля', 
    //             'Форрест Гамп', 'Властелин колец: Две крепости', 'Властелин колец: Братство Кольца'];
    // let n = 10;

    // do {
    //     const newSession = {
    //         time:  n += 2,
    //         timeId: Math.random().toString().substring(2, 4),
    //         filmName: films[0]
    //     }
    //     films.shift();
    //     setSession([...sessions, newSession]);
    // }
    // while (n >= 10 && n <= 20)

    return(
        <div className='sessionList'>
            {session.time}
    {/* {sessions.map(session => {
        return (
            <div className='session' key={session.timeId}>
                {session.time}
            </div>
        )
    })} */}
    </div>
    )


}

export default Session;