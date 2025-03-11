import { useState, useEffect } from "react";
import Header from "./sections/Header";
import Time from "./sections/Time";
import SwiperComponent from "./sections/SwiperComponent";
import { Fade } from "react-awesome-reveal";
import Collage from "./sections/Collage";
import Reasons from "./sections/Reasons";

function App() {

  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });



  // Countdown to a specific event
  useEffect(() => {
    const eventDate = new Date("2025-04-28"); // Change to your event date
    const calculateCountdown = () => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    };

    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Fade duration={10000} triggerOnce>

        <div className="content--canvas z-0">
        </div>
      </Fade>

      <div className="min-h-screen flex flex-col">
        <Header />


          <div className="bg-white z-11 relative shadow-2xl shadow-indigo-50">
          <Time />
          <Reasons />
          <SwiperComponent />
          <Collage />
          

          {/* <section className="bg-white p-6 py-32 max-w-7xl m-auto z-10">
            <h2 className="text-2xl font-semibold text-pink-700">Nuestra Historia</h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>💘 Nos conocimos: 1 de Marzo de 2024</li>
              <li>❤️ Primer beso: 20 de Marzo de 2022</li>
              <li>🌍 Primer viaje juntos: 12 de Septiembre de 2024</li>
            </ul>
          </section> */}

          {/* Countdown Section */}
          <section className="bg-white shadow-lg p-6 w-full text-center z-10">
            <h2 className="text-2xl font-semibold text-pink-700">Lo que viene</h2>
            <p className="text-xl mt-4 text-gray-700">
              Faltan {countdown.days} días, {countdown.hours} horas, {countdown.minutes} minutos y {countdown.seconds} segundos para nuestro aniversario.
            </p>
          </section>

          {/* Footer */}
          <footer className="text-center z-10 bg-white w-full p-6 shadow-lg">
            <p className="text-gray-500">Te amo más de lo que las palabras pueden expresar ❤️</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
