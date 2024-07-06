import { useState } from "react";
import { HeaderProfile } from "../../components"
import { CornerCirclesSVG } from "../../icons"

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import './LocalCalendar.css'

export const CalendarComponent = () => {

    const [value, onChange] = useState(new Date());

    console.log(`este es el valor ${value}`);
    
  return (
    <div 
        className="bg-lima-100 bg-pattern h-screen bg-cover bg-center flex flex-col md:bg-none"
    >   
        <HeaderProfile closeButton={false} text={'Calendario de clases'} showConfig={false} />
        <CornerCirclesSVG className="text-white absolute top-0 right-0 opacity-60" />
        <div className="flex flex-col items-center flex-1">
            <div className="calendarContainer m-11">
                <Calendar 
                    onChange={onChange as any} 
                    value={value} 
                    className={'calendar'}
                />
            </div>
            <div id="prueba" className="w-full bg-white rounded-t-3xl flex flex-col items-center flex-1 px-7 relative max-w-xl md:rounded-3xl md:flex-0 md:max-h-96"  >
                
                <div className="w-full my-6">
                    <p className="font-DMsans font-bold text-heading text-left"> Clases disponibles </p>
                    <p className="font-DMsans font-normal text-heading-sm text-gray-500 mt-3">
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}
