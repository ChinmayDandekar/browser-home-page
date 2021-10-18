import React from 'react'
import '../assets/time.css'

const Time = () => {
    const [date, setDate] = React.useState(new Date());

        React.useEffect(() => {
            const timer = setInterval(() => {
                setDate(new Date());
            }, 1 * 1000);
            return () => {
                clearInterval(timer);
            }
        }, []);
    
    const checkStr = (num) => {
        let str = num.toString()
        if (str.length === 1) {
            return '0' + str;
        } else {
            return str;
        }
    } 
    return (
        <div className="Time">
            <h1>{checkStr(date.getHours())}:{checkStr(date.getMinutes())}</h1>
            <h2>{date.toDateString()}</h2>
        </div>
    )
}

export default Time


