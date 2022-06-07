// import logo from './logo.svg';
// import './App.css';
import React, {useState} from 'react';
import {getToday} from './moment-utils';
import './bae-calendar.scss';
import CalendarHeader from './calendar-header';
import WeekdayIndicator from './weekday-indicator';

const getDaysInMonth = (month, year) => {
  return moment(`${month}-${year}`, 'MM-YYYY').daysInMonth();
}

const getFirstWeekdayOfMonth = (month, year) => {
  return moment(
    `${month}-${year}`, 
    'MM-YYYY'
  ).startOf('month').weekday();
}

const getDatesInMonthDisplay = (month, year) => {
  const daysInMonth = getDaysInMonth(month, year);
  const firstWeekday = getFirstWeekdayOfMonth(month, year);
  const result = [];

  const prev = getPrevMonthYear(month, year);
  const prevDaysInMonth = getDaysInMonth(
    prev.month, 
    prev.year
  );

  for (let j = firstWeekday - 1; j >= 0; j--) {
    result.push({
      date: moment(
        `${prev.month}-${prevDaysInMonth - j}-${prev.year}`, 
        'MM-DD-YYYY'
      ).toDate(), 
      currentMonth: false
      })
  }

  for (let i = 1; i <= daysInMonth; i++) {
    result.push({
      date: moment(`${month}-${i}-${year}`, 'MM-DD-YYYY').toDate(), 
      currentMonth: true
    })
  }

  if (result.length < 42) {
    const daysToAdd = 42 - result.length;
    const next = getNextMonthYear(month, year);

    for (let k = 1; k <= daysToAdd; k++) {
      result.push({
        date: moment(
          `${next.month}-${k}-${next.year}`, 
          'MM-DD-YYYY'
        ).toDate(), 
        currentMonth: false
      })
    }
  }
  return result;
}

const getPrevMonthYear = (month, year) => {
  if (month === 1) {
    return {
      month: 12, 
      year: year - 1
    }
  }
  return {
    month: month - 1, 
    year
  }
}

const getNextMonthYear = (month, year) => {
  if (month === 1) {
    return {
      month: month + 1, 
      year
    }
  }
  return {
    month: 12, 
    year: year + 1
  }
}

const BaeCalendar = () => {
  const [selectDate, setSelectDate] = useState(moment().toDate());

  return (
    <div className={`bae-calendar-container ${themes[theme]}`}>
      <CalendarHeader selectDate={selectDate}/>
    </div>
  );
};

export default BaeCalendar;
