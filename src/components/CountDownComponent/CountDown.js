import React, {useEffect, useRef, useState} from "react";
import './countdown.css';

const CountDown = () => {
    const [timeDays, setDays] = useState('00');
    const [timeHours, setHours] = useState('00');
    const [timeMinutes, setMinutes] = useState('00');
    const [timeSeconds, setSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdown = new Date('January 10, 2022 00:00:00:00');

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdown - now;

            const days = Math.ceil(distance / (1000 * 60 * 60 * 24)) - 1;
            const hours = Math.ceil(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) - 1;
            const minutes = Math.ceil(distance % (1000 * 60 * 60) / (1000 * 60)) - 1;
            const seconds = Math.ceil(distance % (1000 * 60) / (1000)) - 1;

            if (distance >= 0) {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);

            } else {
                clearInterval(interval);
            }
        });
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    });

    return (
        <div className="wd-countdown">
            <div className="wd-count-component">
                <h4 className="text-white mt-4">Next ScrapVenture</h4>
                <div className="row wd-last">
                    <div className="col">
                        <div>{timeDays} days </div>
                    </div>
                    <div className="col">:</div>
                    <div className="col">
                        <div>{timeHours} hours</div>
                    </div>
                    <div className="col">:</div>
                    <div className="col">
                        <div>{timeMinutes} minutes</div>
                    </div>
                    <div className="col">:</div>
                    <div className="col">
                        <div>{timeSeconds} seconds</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CountDown;