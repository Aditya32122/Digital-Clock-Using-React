import React,{useState,useEffect} from "react";

function Digitalclk(){

const [time,setTime]=useState(new Date());

useEffect(()=>{
    const intervalid=setInterval(() => {
        setTime(new Date());
    },1000)

    return() => {
        clearInterval(intervalid);
    }
},[]);

    function formatTime(){
        let hours = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const meridian = hours>=12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(min)}:${padZero(sec)} ${padZero(meridian)}`
    }

    function padZero(num){
        return (num < 10 ? "0" : "") +num;
    }
    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default Digitalclk 