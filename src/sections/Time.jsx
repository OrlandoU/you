import { useEffect, useState } from "react";
import TimeValue from "../components/TimeValue";
import { Fade } from "react-awesome-reveal";
import SwiperComponent from "./SwiperComponent";

export default function Time() {
    const [timeTogether, setTimeTogether] = useState({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [timeTogetherAlt, setTimeTogetherAlt] = useState({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Calculate time together since a specific date
    useEffect(() => {
        const startDate = new Date("2024-04-28"); // Change to your start date

        const getMonthsBetween = (date1, date2, roundUpFractionalMonths) => {
            //Months will be calculated between start and end dates.
            //Make sure start date is less than end date.
            //But remember if the difference should be negative.
            var startDate = date1;
            var endDate = date2;
            var inverse = false;
            if (date1 > date2) {
                startDate = date2;
                endDate = date1;
                inverse = true;
            }

            //Calculate the differences between the start and end dates
            var yearsDifference = endDate.getFullYear() - startDate.getFullYear();
            var monthsDifference = endDate.getMonth() - startDate.getMonth();
            var daysDifference = endDate.getDate() - startDate.getDate();

            var monthCorrection = 0;
            //If roundUpFractionalMonths is true, check if an extra month needs to be added from rounding up.
            //The difference is done by ceiling (round up), e.g. 3 months and 1 day will be 4 months.
            if (roundUpFractionalMonths === true && daysDifference > 0) {
                monthCorrection = 1;
            }
            //If the day difference between the 2 months is negative, the last month is not a whole month.
            else if (roundUpFractionalMonths !== true && daysDifference < 0) {
                monthCorrection = -1;
            }

            return (inverse ? -1 : 1) * (yearsDifference * 12 + monthsDifference + monthCorrection);
        };

        const calculateTimeTogether = () => {
            const now = new Date();
            const diff = now - startDate; // Diferencia en milisegundos

            // Cálculos de tiempo
            const seconds = Math.floor(diff / 1000) % 60;
            const minutes = Math.floor(diff / (1000 * 60)) % 60;
            const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30; // Máximo 30 días
            let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)); // Promedio de días en un mes

            const totalSeconds = Math.floor(diff / 1000);
            const totalMinutes = Math.floor(diff / (1000 * 60));
            const totalHours = Math.floor(diff / (1000 * 60 * 60));
            const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

            const years = now.getFullYear() - startDate.getFullYear();
            const totalMonths = getMonthsBetween(startDate, now, false);
            // Ajustamos si no hemos llegado al día exacto del mes
            if (now.getDate() < startDate.getDate()) {
                months--;
            }

            setTimeTogetherAlt({ months: totalMonths, days: totalDays, hours: totalHours, minutes: totalMinutes, seconds: totalSeconds });
            setTimeTogether({ months, days, hours, minutes, seconds });
        };

        const interval = setInterval(calculateTimeTogether, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        // bg-[url('../assets/bg1.jpg')]
        <section className=" bg-cover p-6 w-full z-10 w-full p-6 py-32 pb-12 min-h-[70vh] flex flex-col justify-end items-center font-light ">
            <div className="max-w-xl flex flex-col gap-2 ">
                <Fade cascade duration={1000} triggerOnce>
                    <h2 className="text-2xl text-pink-700">
                        Katherine
                    </h2>
                    <h3 className="text-xl md:text-3xl">
                        Cada momento contigo es un regalo y cada día a tu lado es un capítulo que quiero seguir escribiendo.
                    </h3>
                    <div className="md:text-xl">
                        Que rapido pasa el tiempo cuando se es feliz no?, ya <span className="text-pink-600">{timeTogetherAlt.months}</span> meses en los que esta vida me ha permitido tener al tesoro mas bello .
                        <span className="text-pink-600"> {timeTogetherAlt.days}</span> días, junto a la mujer mas especial del mundo.
                        <span className="text-pink-600"> {timeTogetherAlt.hours}</span> horas que se han llenado de recuerdos y cariño.
                        <span className="text-pink-600"> {timeTogetherAlt.minutes}</span> minutos que, lejos de ti, parecen eternos, pero junto a ti son fugaces.
                        <span className="text-pink-600"> {timeTogetherAlt.seconds}</span> segundos en los que agradezco con todo mi ser que el universo me haya dado el regalo de conocerte.
                    </div>
                    <div className="md:text-xl">
                        Amotito mio, te amo con todo mi ser, con cada fibra de mi existencia, con cada latido de mi corazón. y no hay un solo segundo en el que no agradezca a la vida por haberte puesto en mi camino.
                    </div>
                    <div className="md:text-xl">
                        Bendito sea el dia en que pude conocerte.
                    </div>
                </Fade>
            </div>

        </section >)
}