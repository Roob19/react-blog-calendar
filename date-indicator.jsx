import React from 'react';
import {
    getDayOfMonth, 
    getMonthDayYear, 
    getMonth, 
    getYear,
} from './moment-utils';
import {getDatesInMonthDisplay} from './date-utils';

const DateIndicator = ({selectDate, setSelectDate}) => {
    const datesInMonth = getDatesInMonthDisplay(
        getMonth(selectDate) + 1, 
        getYear(selectDate)
    );
    const monthDates = datesInMonth.map((i, key) => {
        return (
            <div
                className="date-icon" 
                data-active-month={i.currentMonth}
                data-date={i.date.toString()} 
                key={key} 
                // onClick={changeDate} 
            >
                {getDayOfMonth(i.date)}
            </div>
        );
    });
    return <div className="bae-date-indicator">{monthDates}</div>;
};

export default DateIndicator;