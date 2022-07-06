import './App.css';
import React, {useEffect, useState} from "react";

import logo from './image/casioF.png';


const Timer = () => {
    const [time, setTime] = useState(0)
    const [status, setStatus] = useState('stop')
    let sec;
    useEffect(() => {
        if (status === 'start') {
            sec = setInterval(() => {
                setTime((s) => s + 1);
            }, 1000);
        } else if (status === 'stop') {
            clearInterval(sec)
            setTime(0)
        } else if (status === 'wait') {
            clearInterval(sec)

        } else if (status === 'reset') {
            clearInterval(sec)
            setTime(0)
            sec = setInterval(() => {
                setTime((s) => s + 1);
            }, 1000);
        }
        return () => clearInterval(sec);
    }, [status])

    function correct_time(sec) {
        let h = sec / 3600 ^ 0;
        let m = (sec - h * 3600) / 60 ^ 0;
        let s = sec - h * 3600 - m * 60
        let formatted = [
            h.toString().padStart(2, '0'),
            m.toString().padStart(2, '0'),
            s.toString().padStart(2, '0')
        ].join(':');
        return formatted
    }

    return <div className='timer'>
        <div className='content'>
            <div className='casiostyle'>
                <img src={logo} alt='casio'></img>
            </div>
            <div className="time">
                <span className='correct_time'>{correct_time(time)}</span>

            </div>
            <div className='btn'>
                <button className='start' onClick={() => setStatus('start')}></button>
                <button className='stop' onClick={() => setStatus('stop')}></button>
                <button className='reset' onClick={() => setStatus('reset')}></button>
                <button className='wait' onClick={() => setStatus('wait')}></button>
            </div>
        </div>
    </div>
}


export default Timer;

