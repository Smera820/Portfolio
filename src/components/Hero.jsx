import pic from '../assets/sme.jpg'

function Hero() {

    return (
        <div className='overflow-y-auto pb-10 mx-10 lg:mb-36 pl-8'>
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:p-4'>
                        <img
                            src={pic}
                            alt="profile"
                            className='max-w-xs max-h-69 rounded-full object-cover border-4 border-neutral-800 shadow-lg hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-all'
                            width={650}
                            height={650}
                        />

                    </div>
                </div>
                <div className='w-full lg:w-1/2'>

                    <div
                        initial="hidden"
                        animate="visible"
                        className='flex flex-col items-center lg:items-start mt-5'>
                        <h2

                            className='pb-2 text-3xl tracking-tighter lg:text-6xl'>
                            Smera Sabu
                        </h2>
                        <span

                            className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl tracking-tight text-center text-transparent'>
                            Full stack developer
                        </span>
                        <p

                            className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>

                            Passionate and dedicated Full Stack Developer with hands-on experience in building responsive web applications using the MERN stack. Skilled in developing both frontend and backend, with a strong focus on clean code and user-friendly interfaces.
                            Eager to join a dynamic team where I can contribute to real-world projects and continue growing as a developer.
                        </p>
                        <a

                            href="https://drive.google.com/file/d/1Iq00xfDcmuwsWs6isjRxYcvAk3KPxvFO/view?usp=sharing"
                            className='bg-white text-black rounded-full shadow px-6 py-3 hover:scale-105 transition-transform duration-300 '>
                            View Resume</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero

