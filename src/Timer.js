import React from 'react';
import {Text} from "react-native";

export default function Timer({initialSeconds,textStyle,direction}){

    const formatTimer = number => `0${number}`.slice(-2);

    const getCounter = (time) => {
        const hours = Math.floor(time / 3600)
        const mins = Math.floor((time - (hours * 3600)) / 60);
        const secs = time - mins * 60;
        return {
            hours: hours === 0 ? null : formatTimer(hours),
            mins: formatTimer(mins),
            secs: formatTimer(secs)
        }
    }

    const [timer, setTimer]=React.useState(0)
    const {hours, mins, secs} = getCounter(timer)

    React.useEffect(()=>{
        setTimer(initialSeconds)
    },[initialSeconds])

    React.useEffect(()=>{
        let interval = null
        if(timer != 0){
            interval = setInterval(() => {
                setTimer(direction=="up" ? timer+1 : timer-1)
            }, 1000);
        }else{
            clearInterval(interval)
        }
        return () =>  clearInterval(interval)
    },[timer])

    return(<Text style={textStyle}>{hours&&`${hours}:`}{mins}:{secs}</Text>)
}