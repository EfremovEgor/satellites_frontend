import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { createTheme, ThemeProvider } from '@mui/material';
import dayjs from 'dayjs';

const theme = createTheme({
    palette:{
        primary:{
            main:'#8e24aa', // violet-500
        },
    },
});

export default function DatePicker() {
    const handleDateChange = (newDate) => {
        const formattedDate = dayjs(newDate).format('YYYY-MM-DDTHH:mm:ss.SSSSSS');
        console.log(formattedDate);
    };

    return (
      <div className='fixed z-20 pt-5 pl-5'>
          <ThemeProvider theme={theme}>
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                  <DateCalendar 
                  className='bg-[#2f3134] rounded-xl'
                  onChange={handleDateChange}
                  />
              </LocalizationProvider>
          </ThemeProvider>
      </div>
    );
}
