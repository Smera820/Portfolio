import React from 'react'
import { contact } from '../projects'
import { FaLocationPin, FaPhone } from 'react-icons/fa6'
import { FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Contact() {
    return (
        <div className='border-t border-stone-900 pb-12'>

            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 1, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-10 text-center text-3xl'>Get in Touch
            </motion.h2>

            <div className='flex flex-col items-center justify-center space-x-2 text-lg text-white'>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='flex items-center gap-2 my-4'>
                    <FaLocationPin className='text-red-400' /><span>{contact.address}</span>
                </motion.p>

                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='flex items-center gap-2 my-4'>

                    <FaPhone className='text-green-400' /><span>{contact.phoneNo}</span>
                </motion.p>


                <a href='#' className='flex items-center gap-2 border-b'>
                    <FaEnvelope className='text-blue-400' /><span>{contact.email}</span>
                </a>

            </div>
        </div>
    )
}

export default Contact