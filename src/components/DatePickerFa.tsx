import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'jalali-moment';

function DatePickerFa() {
     const [selectedDate, setSelectedDate] = useState(null);

     const handleDateChange = (date: any) => {
       setSelectedDate(date);
     };
   
     return (
       <div className="jalali-calendar-container">
         <DatePicker
          className=''
           selected={selectedDate}
           onChange={handleDateChange}
           dateFormat="YYYY/MM/DD"
           locale="fa"
           inline
         />
       </div>
     );
}

export default DatePickerFa