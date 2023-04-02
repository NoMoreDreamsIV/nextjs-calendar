
export default function CalendarDays({ currentDay }) {
    let firstDayOfMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1);
    let weekOfFirstDay = firstDayOfMonth.getDay();
    let currentDays = [];

    for (let day = 0; day < 42; day++) {
        if (day === 0 && weekOfFirstDay === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (day === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekOfFirstDay));
        } else {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }

        let calendarDay = {
            currentMonth: (firstDayOfMonth.getMonth() === currentDay.getMonth()),
            date: (new Date(firstDayOfMonth)),
            month: firstDayOfMonth.getMonth(),
            number: firstDayOfMonth.getDate(),
            selected: (firstDayOfMonth.toDateString() === currentDay.toDateString()),
            year: firstDayOfMonth.getFullYear()
        }

        currentDays.push(calendarDay);
    }

    return (
        <div className="table-content">
            {
                currentDays.map((day, _) => {
                    return (
                        <div className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
                            key={day.date}>
                            <p>{day.number}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}