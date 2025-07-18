import { send } from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import { Suspense, useRef, useState } from "react";
import Fox from "../models/Fox";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({name: '', email: '', message: ''})
    const [isLoading, setIsLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState('idle');

    const {alert, showAlert, hideAlert} = useAlert();

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    };
    const handleFocus = () => {
        setCurrentAnimation('walk');
    };
    const handleBlur = () => {
        setCurrentAnimation('idle');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation('hit');
        send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                from_email: form.email,
                message: form.message,
                to_name: 'Damian',
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        ).then(()=> {
            setIsLoading(false);
            showAlert({text: 'Meldingen er sendt!', type: 'success'})
            setTimeout(() => {
                hideAlert();
                setCurrentAnimation('idle');
                setForm({name: '', email: '', message: ''});
            }, 3000)
        }).catch((error) => {
            setCurrentAnimation('idle');
            showAlert({text: 'Jeg har ikke mottatt meldingen din!', type: 'danger'})
            setIsLoading(false);
        })
    };
    return ( 
    <section className="relative flex lg:flex-row flex-col max-container">
        {alert.show && <Alert {...alert} />}
        <div className="flex-1 min-w-[50%] flex flex-col">
            <h1 className="head-text">
                Ta kontakt
            </h1>
            <form className="w-full flex flex-col gap-7 mt-14"
            onSubmit={handleSubmit}>
                <label className="text-black-500 font-semibold">
                    Name
                    <input 
                    type="text" 
                    name="name" 
                    className="input"
                    placeholder="John Doe" 
                    required
                    value={form.name} 
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    />
                </label>
                <label className="text-black-500 font-semibold">
                    E-mail
                    <input 
                    type="email" 
                    name="email" 
                    className="input"
                    placeholder="john@hotmail.com" 
                    required
                    value={form.email} 
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    />
                </label>
                <label className="text-black-500 font-semibold">
                Message
                <textarea  
                    name="message" 
                    className="input"
                    placeholder="Hei, jeg vil gjerne gi deg en jobb..." 
                    rows={4}
                    required
                    value={form.message} 
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    />
                </label>
                <button 
                    type='submit'
                    className="btn"
                    disabled={isLoading}
                    onFocus={handleFocus}
                    onBlur={handleBlur}  
                >
                {isLoading ? 'Sender ...' : 'Send melding'}
                </button>
            </form>
        </div>
        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
            <Canvas
                camera={{
                    position: [0,0,5],
                    fov: 65,
                    near: 0.1,
                    far: 1000,
                }}
            >
            <directionalLight intensity={2.5} position={[0, 0, 1]}/>
            <ambientLight intensity={0.4} />
            <Suspense fallback={<Loader/>}>
                <Fox
                    currentAnimation={currentAnimation}
                    position={[0.5, 0.35, 0]}
                    rotation={[12.6, -0.6, 0]}
                    scale={[0.5, 0.5, 0.5]}
                />
            </Suspense>

            </Canvas>
        </div>

    </section> );
}
 
export default Contact;