import pic from '../assets/sme.jpg'

function Hero() {
    return (
        <div className='min-h-screen overflow-y-auto pb-9 lg:mb-36 pl-8'>
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:p-8'>
                        <img src={pic} alt="profile" className='max-w-xs max-h-69 rounded-full object-cover border-2 border-stone-900' />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start mt-10'>
                        <h2 className='pb-2 text-3xl tracking-tighter lg:text-8xl'>
                            Smera Sabu
                        </h2>
                        <span className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl tracking-tight text-center text-transparent'>
                            Full stack developer
                        </span>
                        <p className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>

                            Aspiring Full Stack Developer skilled in MERN Stack, building responsive UIs, and developing
                            clean, scalable RESTful APIs.  Eager to contribute to dynamic teams and grow in a
                            collaborative development environment
                        </p>
                        <a href="https://drive.google.com/file/d/1Iq00xfDcmuwsWs6isjRxYcvAk3KPxvFO/view?usp=sharing" className='bg-white text-black rounded-full shadow px-6 py-3  '>
                        Download Resume</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero