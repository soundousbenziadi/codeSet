import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react';
import {
    Code2,
    Trophy,
    Users,
    Calendar,
    MapPin,
    Clock,
    Shield,
    Cpu,
    Zap,
    Award,
    ChevronRight,
    Sun,
    Moon,
    X,
    Check,
    Mail,
    User,
    Phone,
    GraduationCap
} from 'lucide-react';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: false
    });

    // Countdown timer
    useEffect(() => {
        const targetDate = new Date('2025-11-08T09:00:00').getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                    expired: false
                });
            } else {
                setTimeLeft({ expired: true });
            }
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen"
            style={{
                color: 'var(--color-textc)',
                backgroundColor: 'var(--color-backgroundc)'
            }}>

            {/* Hero Section */}
            <section className="relative pb-14 pt-16 px-8 md:pt-25 md:pb-15 md:px-15 space-y-6 overflow-hidden">

                <div className="">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                                className="inline-block px-4 py-2 rounded-full mb-6"
                                style={{ backgroundColor: 'var(--color-section2)' }}
                            >
                                <span style={{ color: 'var(--color-accentc)' }} className="font-semibold">
                                    November 8, 2025 • Setif, Algeria
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-5xl md:text-6xl font-bold mb-8 leading-tight border-l-4 pl-6"
                                style={{ fontFamily: 'var(--font-heading)', borderColor: 'var(--color-accentc)' }}
                            >
                                Setifian Programming
                                <span style={{ color: 'var(--color-accentc)' }}> Competition</span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-wrap gap-4"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowModal(true)}
                                    className="px-6 py-4 rounded-lg font-semibold flex items-center space-x-2 text-black"
                                    style={{ backgroundColor: 'var(--color-accentc)' }}
                                >
                                    <span>Register Now</span>
                                    <ChevronRight className="w-5 h-5" />
                                </motion.button>

                                <motion.a
                                    href="#schedule"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-4 rounded-lg font-semibold border-2"
                                    style={{ borderColor: 'var(--color-accentc)', color: 'var(--color-accentc)' }}
                                >
                                    View Schedule
                                </motion.a>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="flex items-center space-x-6 mt-8"
                            >
                                <div className="flex items-center space-x-2">
                                    <Users className="w-5 h-5" style={{ color: 'var(--color-accentc)' }} />
                                    <span className="text-sm">17-26 Years Old</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Clock className="w-5 h-5" style={{ color: 'var(--color-accentc)' }} />
                                    <span className="text-sm">Full Day Event</span>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative flex-1"
                        >
                            <div className="relative rounded-2xl p-8"
                                style={{ backgroundColor: 'var(--color-section2)' }}>
                                <div className="flex flex-wrap gap-4">
                                    {[
                                        { icon: Code2, label: 'Algorithmic', color: '#60F885' },
                                        { icon: Shield, label: 'CTF', color: '#60F885' },
                                        { icon: Trophy, label: 'Prizes', color: '#60F885' },
                                        { icon: Zap, label: 'Live Board', color: '#60F885' }
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className="p-6 rounded-xl text-center"
                                            style={{
                                                backgroundColor: 'var(--color-section3)',
                                                flex: '1 1 calc(50% - 0.5rem)',
                                                minWidth: '140px'
                                            }}
                                        >
                                            <item.icon className="w-8 h-8 mx-auto mb-2" style={{ color: item.color }} />
                                            <p className="font-semibold">{item.label}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Countdown Timer */}
            <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-section1)' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl md:text-4xl font-bold mb-4"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            Registration Closes In
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg mb-8 opacity-80"
                        >
                            Don't miss your chance to compete!
                        </motion.p>

                        {timeLeft.expired ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                                className="text-2xl font-bold"
                                style={{ color: 'var(--color-accentc)' }}
                            >
                                Registration Closed
                            </motion.div>
                        ) : (
                            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
                                {['days', 'hours', 'minutes', 'seconds'].map((unit, idx) => (
                                    <motion.div
                                        key={unit}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.5 }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="p-6 rounded-xl"
                                        style={{
                                            backgroundColor: 'var(--color-section3)',
                                            flex: '1 1 calc(25% - 1rem)',
                                            minWidth: '100px'
                                        }}
                                    >
                                        <div className="text-4xl md:text-5xl font-bold mb-2"
                                            style={{ color: 'var(--color-accentc)' }}>
                                            {timeLeft[unit] || 0}
                                        </div>
                                        <div className="text-sm uppercase opacity-70">{unit}</div>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        <motion.button
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowModal(true)}
                            className="mt-8 px-10 py-4 rounded-lg font-semibold text-black text-lg"
                            style={{ backgroundColor: 'var(--color-accentc)' }}
                        >
                            Register Before Time Runs Out
                        </motion.button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home