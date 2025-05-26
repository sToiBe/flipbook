import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

function Loading() {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => {
                if (prev.length >= 3) return '';
                return prev + '.';
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div 
            className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100 
                }}
                className="text-4xl font-bold text-center mb-6"
                style={{fontFamily: 'Lato, sans-serif', fontWeight: 700}}
            >
                Porfolio <br/> Arq. Nicole Tomey
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl"
            >
                <span>cargando</span>
                <motion.span
                    animate={{ 
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                >
                    {dots}
                </motion.span>
            </motion.div>
        </motion.div>
    );
}

export default Loading;
