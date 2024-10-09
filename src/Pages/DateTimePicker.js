import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import '../Pages/DateTimePicker.css'; 

const DateTimePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    
    const timeSlotsAM = ["12:00 AM", "12:30 AM", "01:00 AM", "01:30 AM", "02:00 AM"];
    const timeSlotsPM = ["09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"];

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeSelection = (time) => {
        setSelectedTime(time);
    };

    return (
        <div className="date-time-picker">
            <div className="header">
                <h2>The Healing Oasis</h2>
            </div>
            <div className="date-picker">
                <h3>Pick a Date and Time</h3>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MMMM d, yyyy"
                    minDate={new Date()}
                    inline
                />
                <div className="timezone">
                    <small>GMT+05:30 Asia/Calcutta (GMT+5:30)</small>
                </div>
            </div>

            {selectedDate && (
                <div className="time-picker">
                    <h4>Available Starting times for {moment(selectedDate).format('ddd, MMM D, YYYY')}</h4>
                    <div className="time-slots">
                        <div className="am-slots">
                            <h5>AM</h5>
                            {timeSlotsAM.map((time) => (
                                <button
                                    key={time}
                                    onClick={() => handleTimeSelection(time)}
                                    className={selectedTime === time ? 'active' : ''}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                        <div className="pm-slots">
                            <h5>PM</h5>
                            {timeSlotsPM.map((time) => (
                                <button
                                    key={time}
                                    onClick={() => handleTimeSelection(time)}
                                    className={selectedTime === time ? 'active' : ''}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DateTimePicker;
