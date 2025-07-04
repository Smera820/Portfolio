import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiCss3, SiExpress, SiHtml5, SiJavascript, SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { motion } from 'framer-motion'



const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

function Technology() {
    return (
        <div className='pb-14'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-12 text-center text-4xl '>Technologies </motion.h2>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>

                <motion.div initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}>
                    <SiMongodb className='text-7xl text-green-600' />
                </motion.div>

                <motion.div initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}>
                    <SiExpress className='text-7xl' />
                </motion.div>

                <motion.div initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className='p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>

                <motion.div initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}>
                    <FaNodeJs className='text-7xl text-green-500' />
                </motion.div>

                <motion.div initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}>
                    <SiJavascript className='text-7xl text-yellow-400' />
                </motion.div>

                <motion.div initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}>
                    <SiHtml5 className='text-7xl text-orange-600' />
                </motion.div>

                <motion.div initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}>
                    <SiCss3 className='text-7xl text-blue-600' />
                </motion.div>

                <motion.div className='p-4' initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}>
                    <TbBrandNextjs className='text-7xl' />
                </motion.div>

            </motion.div>

        </div>
    )
}

export default Technology