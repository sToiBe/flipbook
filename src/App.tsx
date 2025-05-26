import './App.css'
import Book from './Book.tsx';
import Loading from './Loading.tsx';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time and preload images
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Show loading screen for 3 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 1 }}
                        exit={{ 
                            opacity: 0,
                            transition: { duration: 0.5 }
                        }}
                    >
                        <Loading />
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ 
                            duration: 0.8,
                            type: "spring",
                            stiffness: 50,
                            damping: 20
                        }}
                        className="flex justify-center items-center px-2 sm:p-8 w-screen h-screen overflow-hidden"
                    >
                        <div className="w-full h-full flex justify-center items-center">
                            <Book/>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default App
