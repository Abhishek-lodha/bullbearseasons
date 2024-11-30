// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const DatePanel = ({ onDateChange }) => {
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(new Date());
//     const [relativeRange, setRelativeRange] = useState('1 Month'); // Default to 'Last 1 Month'

//     // Handle changes to relative date range
//     const handleRelativeDateChange = (range) => {
//         setRelativeRange(range);
//         const currentDate = new Date();
//         let newStartDate;

//         switch (range) {
//             case '1 Month':
//                 newStartDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
//                 break;
//             case '1 Year':
//                 newStartDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1));
//                 break;
//             case '5 Years':
//                 newStartDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - 5));
//                 break;
//             default:
//                 newStartDate = currentDate;
//         }
//         setStartDate(newStartDate);
//         setEndDate(new Date());
//         onDateChange(newStartDate, new Date(), range);
//     };

//     // Handle absolute date range selection
//     const handleAbsoluteDateChange = () => {
//         onDateChange(startDate, endDate, 'absolute');
//     };

//     return (
//         <div className="date-panel">
//             <h3>Date Range:</h3>
//             <div className="relative-date-range">
//                 <button onClick={() => handleRelativeDateChange('1 Month')}>Last 1 Month</button>
//                 <button onClick={() => handleRelativeDateChange('1 Year')}>Last 1 Year</button>
//                 <button onClick={() => handleRelativeDateChange('5 Years')}>Last 5 Years</button>
//             </div>

//             <div className="absolute-date-range">
//                 <h4>Or select specific dates:</h4>
//                 <div>
//                     <label>Start Date:</label>
//                     <DatePicker
//                         selected={startDate}
//                         onChange={(date) => setStartDate(date)}
//                         dateFormat="yyyy/MM/dd"
//                         selectsStart
//                         startDate={startDate}
//                         endDate={endDate}
//                     />
//                 </div>

//                 <div>
//                     <label>End Date:</label>
//                     <DatePicker
//                         selected={endDate}
//                         onChange={(date) => setEndDate(date)}
//                         dateFormat="yyyy/MM/dd"
//                         selectsEnd
//                         startDate={startDate}
//                         endDate={endDate}
//                     />
//                 </div>

//                 <button onClick={handleAbsoluteDateChange}>Update Chart</button>
//             </div>
//         </div>
//     );
// };

// export default DatePanel;