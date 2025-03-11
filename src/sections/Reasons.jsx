import { TypeAnimation } from "react-type-animation";
import messages from "../assets/messages";

export default function Reasons() {
    return (
        <section className='w-full p-6 py-20 overflow-hidden text-center'>
            <div className="z-10 max-w-7xl md:p-6 m-auto">
                <h1 className="text-3xl md:text-5xl py-2 text-pink-700">Porque te amo?</h1>
                <div className="text-2xl">
                    <TypeAnimation sequence={messages} speed={30} />
                </div>
            </div>
        </section>
    );
}