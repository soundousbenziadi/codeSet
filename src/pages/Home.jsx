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
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        age: '',
        category: 'algorithmic',
        teamMode: 'individual',
        experience: 'beginner'
    });
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Replace this URL with your n8n webhook URL
            const response = await fetch('https://n8n-fly-solitary-cherry-105.fly.dev/webhook/competition-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    age: formData.age,
                    category: formData.category,
                    experience: formData.experience,
                    timestamp: new Date().toISOString()
                })
            });

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => {
                    setShowModal(false);
                    setSubmitted(false);
                    setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        age: '',
                        category: 'algorithmic',
                        experience: 'beginner'
                    });
                }, 3000);
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
        }
    };

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
            <section className="relative pb-14 pt-20 px-10 md:pt-25 md:pb-15 md:px-15 space-y-6 overflow-hidden">

                <div>
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
                                className="text-5xl md:text-6xl font-medium mb-8 leading-tight border-l-4 pl-6"
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
                                className="flex flex-wrap gap-4 px-6 md:px-3"
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
            <section className="py-16 px-4 relative" style={{ backgroundColor: 'var(--color-section1)' }}>
                <div class="custom-shape-divider-top-1762207414 hidden md:block">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl md:text-4xl font-bold mb-6"
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
                            className="mt-8 px-10 py-4 rounded-lg text-black text-lg"
                            style={{ backgroundColor: 'var(--color-accentc)' }}
                        >
                            Register Before Time Runs Out
                        </motion.button>
                    </div>
                </div>
            </section>
            {/* About Section */}
            <section id="about" className="py-16 px-8 md:px-15">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl md:text-4xl font-bold mb-6"
                        >
                            About the Competition
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg opacity-80 max-w-3xl mx-auto"
                        >
                            A full-day challenge featuring algorithmic programming and CTF security challenges
                        </motion.p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 mb-12">
                        {[
                            {
                                icon: Code2,
                                title: 'Algorithmic Programming',
                                items: ['Data Structures & Algorithms', 'Dynamic Programming', 'Graph Theory', 'Optimization Challenges']
                            },
                            {
                                icon: Shield,
                                title: 'Capture The Flag (CTF)',
                                items: ['Security Challenges', 'Logic & Puzzles', 'Code Analysis', 'Real-time Competitions']
                            }
                        ].map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: idx * 0.2 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="p-8 rounded-2xl flex-1"
                                style={{ backgroundColor: 'var(--color-section2)' }}
                            >
                                <category.icon className="w-12 h-12 mb-4" style={{ color: 'var(--color-accentc)' }} />
                                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                                <ul className="space-y-3">
                                    {category.items.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false, amount: 0.5 }}
                                            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                            className="flex items-start space-x-2"
                                        >
                                            <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accentc)' }} />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-6">
                        {[
                            { icon: MapPin, label: 'Venue', value: 'Skill Center, Setif' },
                            { icon: Calendar, label: 'Date', value: 'November 8, 2025' },
                            { icon: Clock, label: 'Time', value: '09:00 AM - 06:00 PM' }
                        ].map((info, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="p-6 rounded-xl text-center"
                                style={{
                                    backgroundColor: 'var(--color-section3)',
                                    flex: '1 1 calc(33.333% - 1rem)',
                                    minWidth: '200px'
                                }}
                            >
                                <info.icon className="w-8 h-8 mx-auto mb-3" style={{ color: 'var(--color-accentc)' }} />
                                <p className="text-sm opacity-70 mb-1">{info.label}</p>
                                <p className="font-semibold text-lg">{info.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Schedule Section */}
            <section id="schedule" className="py-16 px-8 md:px-15" style={{ backgroundColor: 'var(--color-section1)' }}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl md:text-4xl font-bold mb-6"

                        >
                            Event Schedule
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg opacity-80"
                        >
                            November 8, 2025 - Full Day Schedule
                        </motion.p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {[
                            { time: '09:00 AM', title: 'Registration & Check-in', desc: 'Badge distribution and technical setup' },
                            { time: '09:30 AM', title: 'Opening Ceremony', desc: 'Welcome address and rules presentation' },
                            { time: '10:00 AM', title: 'Competition Begins', desc: 'CTF and algorithmic challenges released' },
                            { time: 'All Day', title: 'Problem Solving', desc: 'Continuous challenges with live leaderboard' },
                            { time: '06:00 PM', title: 'Competition Ends', desc: 'Final submissions deadline' },
                            { time: '06:30 PM', title: 'Awards Ceremony', desc: 'Results announcement and prizes' },
                            { time: '07:00 PM', title: 'Networking & Closing', desc: 'Certificate distribution' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                whileHover={{ x: 10, scale: 1.02 }}
                                className="flex flex-col sm:flex-row items-start gap-4 p-6 rounded-xl"
                                style={{ backgroundColor: 'var(--color-section3)' }}
                            >
                                <div className="flex-shrink-0 sm:w-24 sm:text-right">
                                    <span className="font-bold" style={{ color: 'var(--color-accentc)' }}>
                                        {item.time}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                    <p className="opacity-70">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-16 px-8 md:px-15" id="cta">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-bold mb-6"

                    >
                        Ready to Compete?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl mb-8 opacity-80"
                    >
                        Join us for an exciting day of programming challenges and showcase your skills!
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowModal(true)}
                        className="px-12 py-5 rounded-lg font-semibold text-black text-xl"
                        style={{ backgroundColor: 'var(--color-accentc)' }}
                    >
                        Register Now
                    </motion.button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-8 md:px-15 border-t"
                style={{
                    backgroundColor: 'var(--color-section1)',
                    borderColor: 'var(--color-secondaryc)'
                }}>
                <div className="max-w-6xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.7, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        © 2025 Setifeian Scientific Club • Ferhat Abbes Setif University 1
                    </motion.p>
                    {/* <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.7, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-2"
                    >
                        Sponsored by Skill Center Setif
                    </motion.p> */}
                </div>
            </footer>

            {/* Registration Modal */}
            {showModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
                    onClick={() => !submitted && setShowModal(false)}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        transition={{ duration: 0.4 }}
                        className="w-full max-w-2xl rounded-2xl p-8 max-h-[90vh] overflow-y-auto"
                        style={{ backgroundColor: 'var(--color-backgroundc)' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {!submitted ? (
                            <>
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-3xl font-bold">
                                        Register for Competition
                                    </h3>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="p-2 rounded-lg hover:opacity-70 transition"
                                        style={{ backgroundColor: 'var(--color-secondaryc)' }}
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <label className="flex items-center gap-2 mb-2 font-semibold">
                                            <User className="w-5 h-5" style={{ color: 'var(--color-accentc)' }} />
                                            <span>Full Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full p-3 rounded-lg border-2 outline-none transition focus:border-opacity-100"
                                            style={{
                                                backgroundColor: 'var(--color-section2)',
                                                borderColor: 'var(--color-secondaryc)'
                                            }}
                                            placeholder="Enter your full name"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <label className="flex items-center gap-2 mb-2 font-semibold">
                                            <Mail className="w-5 h-5" style={{ color: 'var(--color-accentc)' }} />
                                            <span>Email Address</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full p-3 rounded-lg border-2 outline-none transition focus:border-opacity-100"
                                            style={{
                                                backgroundColor: 'var(--color-section2)',
                                                borderColor: 'var(--color-secondaryc)'
                                            }}
                                            placeholder="your.email@example.com"
                                        />
                                    </motion.div>

                                    <div className="flex flex-col md:flex-row gap-4">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="flex-1"
                                        >
                                            <label className="flex items-center gap-2 mb-2 font-semibold">
                                                <Phone className="w-5 h-5" style={{ color: 'var(--color-accentc)' }} />
                                                <span>Phone Number</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full p-3 rounded-lg border-2 outline-none transition focus:border-opacity-100"
                                                style={{
                                                    backgroundColor: 'var(--color-section2)',
                                                    borderColor: 'var(--color-secondaryc)'
                                                }}
                                                placeholder="0555555555"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="flex-1"
                                        >
                                            <label className="flex items-center gap-2 mb-2 font-semibold">
                                                <GraduationCap className="w-5 h-5" style={{ color: 'var(--color-accentc)' }} />
                                                <span>Age</span>
                                            </label>
                                            <input
                                                type="number"
                                                name="age"
                                                value={formData.age}
                                                onChange={handleInputChange}
                                                required
                                                min="17"
                                                max="26"
                                                className="w-full p-3 rounded-lg border-2 outline-none transition focus:border-opacity-100"
                                                style={{
                                                    backgroundColor: 'var(--color-section2)',
                                                    borderColor: 'var(--color-secondaryc)'
                                                }}
                                                placeholder="17-26"
                                            />
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <label className="flex items-center gap-2 mb-2 font-semibold">
                                            <Code2 className="w-5 h-5" style={{ color: 'var(--color-accentc)' }} />
                                            <span>Competition Category</span>
                                        </label>
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleInputChange}
                                            className="w-full p-3 rounded-lg border-2 outline-none transition focus:border-opacity-100"
                                            style={{
                                                backgroundColor: 'var(--color-section2)',
                                                borderColor: 'var(--color-secondaryc)',
                                                color: 'var(--color-textc)'
                                            }}
                                        >
                                            <option value="algorithmic">Algorithmic Programming</option>
                                            <option value="ctf">Capture The Flag (CTF)</option>
                                            <option value="both">Both Categories</option>
                                        </select>
                                    </motion.div>


                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <label className="flex items-center gap-2 mb-2 font-semibold">
                                            <Cpu className="w-5 h-5" style={{ color: 'var(--color-accentc)' }} />
                                            <span>Experience Level</span>
                                        </label>
                                        <select
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleInputChange}
                                            className="w-full p-3 rounded-lg border-2 outline-none transition focus:border-opacity-100"
                                            style={{
                                                backgroundColor: 'var(--color-section2)',
                                                borderColor: 'var(--color-secondaryc)',
                                                color: 'var(--color-textc)'
                                            }}
                                        >
                                            <option value="beginner">Beginner</option>
                                            <option value="intermediate">Intermediate</option>
                                            <option value="advanced">Advanced</option>
                                        </select>
                                    </motion.div>

                                    <motion.button
                                        type="submit"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 rounded-lg font-bold text-lg text-black"
                                        style={{ backgroundColor: 'var(--color-accentc)' }}
                                    >
                                        Submit Registration
                                    </motion.button>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.7 }}
                                        transition={{ delay: 0.8 }}
                                        className="text-sm text-center"
                                    >
                                        By registering, you agree to follow competition rules and guidelines
                                    </motion.p>
                                </form>
                            </>
                        ) : (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center py-12"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", duration: 0.6 }}
                                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                                    style={{ backgroundColor: 'var(--color-accentc)' }}
                                >
                                    <Check className="w-12 h-12 text-black" />
                                </motion.div>
                                <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Registration Successful!
                                </h3>
                                <p className="text-lg opacity-80">
                                    Thank you for registering. Check your email for confirmation details.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}
export default Home