import React, {useState} from 'react';
import moment from 'moment';
import {getToday} from './moment-utils';
import './bae-calendar.scss';
import CalendarHeader from './calendar-header';
import WeekdayIndicator from './weekday-indicator';
import DateIndicator from './date-indicator';
import MonthIndicator from './month-indicator';

const BaeCalendar = () => {
  const [selectDate, setSelectDate] = useState(moment().toDate());
  return (
    <div className={`bae-calendar-container ${themes[theme]}`}>
      <CalendarHeader selectDate={selectDate}/>
      <WeekdayIndicator />
      <DateIndicator 
        selectDate={selectDate} 
        setSelectDate={setSelectDate}
      />
      <MonthIndicator 
        selectDate={selectDate} 
        setSelectDate={setSelectDate} 
      />
    </div>
  );
};

export default BaeCalendar;
