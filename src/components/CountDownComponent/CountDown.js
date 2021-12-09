import React, {useEffect, useRef, useState} from "react";
import './countdown.css';
import service from "./service";
import {useDispatch} from "react-redux";
import _ from "lodash";

let counter;
let newDate;
const CountDown = ({user}) => {
    const dispatch = useDispatch();
    const [timeDays, setDays] = useState(0);
    const [timeHours, setHours] = useState(0);
    const [timeMinutes, setMinutes] = useState(0);
    const [timeSeconds, setSeconds] = useState(0);
    let [count, setCount] = useState({});

    let interval = useRef();
    useEffect(async () => {
        counter = await service.findCountDownById(dispatch, user._id);
        if(counter.time !== null) {
            setCount(counter.time[0]);
        }
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    }, [counter]);

    const startTimer = () => {
        let countdown;
        if (!count) {
            countdown = new Date("0000-00-00");
        }else {
            let dateCount = count.date;
            countdown = new Date(dateCount);
        }

        interval = setInterval(() => {
            const now = new Date().getTime();
            let distance = countdown - now;

            let days = Math.ceil(distance / (1000 * 60 * 60 * 24)) - 1;
            let hours = Math.ceil(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) - 1;
            let minutes = Math.ceil(distance % (1000 * 60 * 60) / (1000 * 60)) - 1;
            let seconds = Math.ceil(distance % (1000 * 60) / (1000)) - 1;

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

    const setCountOnClick = (event) => {
        setCount({...count, date: event.target.value});
        newDate = event.target.value;
    }

    const setCountInDB = () => {
        let newCountDate = {
            _id: count._id,
            person: count.person,
            date: newDate
        }
        service.updateCountDown(dispatch, newCountDate);
        window.location.reload();
    }

    return (
        <div className="row mt-4">
        <div className="wd-countdown">
            <div className="wd-input">
                <div className="row">
                    <div className="col-10">
                        <input type="date"
                               className="p-2 wd-inputBar w-100 bg-black border-0 text-white"
                               onChange={setCountOnClick}/>
                    </div>
                    <div className="col-2">
                        <button className="wd-set" onClick={setCountInDB}>
                            Set
                        </button>
                    </div>
                </div>
            </div>
            <div className="wd-count-component">
                <h4 className="text-white mt-4">Next ScrapVenture</h4>
                <div className="row wd-last">
                    <div className="col">
                        <div>{timeDays} days</div>
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
        </div>
    )
}
export default CountDown;