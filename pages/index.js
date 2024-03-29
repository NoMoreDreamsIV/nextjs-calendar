import { useState } from "react";
import CalendarDays from "../components/CalendarDays";
import Modal from "../components/Modal";

export default function Calendar() {
    const [currentDay, changeCurrentDay] = useState(new Date());

    const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    const handleChange = (evt) => {
        changeCurrentDay(new Date(evt));
    }

    return (
        <>
            <div className="calendar">
                <input type="date" onChange={(evt) => handleChange(evt.target.value)} />
                <div className="calendar-header">
                    <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
                </div>
                <div className="calendar-body">
                    <div className="table-header">
                        {weeks.map((week, _) => {
                            return <div className="weeks" key={week}><p>{week}</p></div>;
                        })}
                    </div>
                    <CalendarDays currentDay={currentDay} />
                </div>
            </div>
        </>
    )
}