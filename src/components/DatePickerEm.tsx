import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/css/DatePickerGregorian.css';

function DatePickerEm() {
     const [selectedDate, setSelectedDate] = useState(null);

     const handleDateChange = (date: any) => {
       setSelectedDate(date);
     };
   
     return (
       <div>
         <DatePicker
           selected={selectedDate}
           onChange={handleDateChange}
           dateFormat="MM/dd/yyyy"
           inline   
         />
       </div>
     );
}

export default DatePickerEm