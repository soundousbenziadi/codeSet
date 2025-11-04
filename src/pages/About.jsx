import React from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Clock, Lightbulb, Target, Award, BookOpen, Rocket, Heart } from 'lucide-react';



import sescologolight from '../assets/sesclogoo.png'
import sesclogodark from '../assets/sesclogodark.jpg'
import clubImage from '../assets/sescMembers.jpg';
import workshops from '../assets/wrokshops.jpg';
import projects from '../assets/projects.jpg';
import hackathons from '../assets/hackathons.jpg';

export default function AboutSESC() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--color-backgroundc)', color: 'var(--color-textc)' }}>

            {/* Hero Section */}
            <section className="relative flex flex-col md:flex-row items-center justify-center md:justify-around min-h-screen py-16 px-8 md:px-15 gap-12">
                <div className="flex flex-col items-center md:items-start order-2 md:order-1 gap-8 max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:border-l-4 lg:pl-6 text-3xl md:text-4xl lg:text-6xl font-bold"
                        style={{ borderColor: 'var(--color-accentc)' }}
                    >
                        Setifian Scientific Club

                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl leading-relaxed text-justify md:text-left opacity-90"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        The Setifian Scientific Club, founded on April 29, 2013, at the University of Setif 1, connects students from various scientific fields. Our mission is to promote intellectual curiosity and skill development through engaging, hands-on activities.
                    </motion.p>
                </div>

                <motion.div
                    className="order-1 md:order-2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                >
                    {/* Replace with your logo */}
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl flex items-center justify-center"
                    >
                        <img
                            alt="logo"
                            src={sescologolight}
                            className='dark:hidden rounded-full'
                        />
                        <img
                            alt="logo"
                            src={sesclogodark}
                            className='hidden dark:block rounded-full'
                        />


                    </div>
                </motion.div>
            </section>

            {/* Mission & Values Section */}
            <section className="py-16 px-8 md:px-15" style={{ backgroundColor: 'var(--color-section1)' }}>
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="flex items-center justify-center gap-3 mb-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <motion.div
                                className="p-3 rounded-full hidden md:block"
                                style={{ backgroundColor: 'var(--color-accentc)', opacity: 0.1 }}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Target className="w-8 h-8" style={{ color: 'var(--color-accentc)' }} />
                            </motion.div>
                            <h2 className="text-3xl md:text-4xl font-bold" >
                                Our Mission & Values
                            </h2>
                        </motion.div>

                        <motion.p
                            className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed text-justify"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            SESC fosters a collaborative environment that encourages idea exploration and critical thinking
                        </motion.p>
                    </motion.div>

                    <div className="flex flex-wrap gap-6">
                        {[
                            {
                                icon: Lightbulb,
                                title: 'Innovation',
                                description: 'Encouraging creative thinking and innovative solutions to real-world problems'
                            },
                            {
                                icon: BookOpen,
                                title: 'Learning',
                                description: 'Providing continuous learning opportunities through workshops and events'
                            },
                            {
                                icon: Users,
                                title: 'Collaboration',
                                description: 'Building a community of like-minded students working together'
                            },
                            {
                                icon: Rocket,
                                title: 'Growth',
                                description: 'Supporting personal and professional development of our members'
                            }
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="p-8 rounded-2xl"
                                style={{
                                    backgroundColor: 'var(--color-section2)',
                                    flex: '1 1 calc(50% - 0.75rem)',
                                    minWidth: '280px'
                                }}
                            >
                                <value.icon className="w-12 h-12 mb-4" style={{ color: 'var(--color-accentc)' }} />
                                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                                <p className="opacity-80 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 px-8 md:px-15">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">

                        {/* Stats Grid */}
                        <div className="flex flex-wrap gap-6 flex-1">
                            {[
                                { icon: Users, label: 'Active Members', value: '100+', color: '#60F885' },
                                { icon: Award, label: 'Events Organized', value: '150+', color: '#60F885' },
                                { icon: Clock, label: 'Years of Excellence', value: '11+', color: '#60F885' },
                                { icon: Heart, label: 'Projects', value: '15+', color: '#60F885' }
                            ].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="p-6 rounded-xl text-center"
                                    style={{
                                        backgroundColor: 'var(--color-section3)',
                                        flex: '1 1 calc(50% - 0.75rem)',
                                        minWidth: '200px'
                                    }}
                                >
                                    <stat.icon className="w-10 h-10 mx-auto mb-3" style={{ color: stat.color }} />
                                    <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: stat.color }}>
                                        {stat.value}
                                    </div>
                                    <p className="text-sm opacity-70">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Image */}
                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden h-96"
                                style={{ backgroundColor: 'var(--color-section2)' }}>
                                {/* Replace with your image */}
                                <div className="w-full h-full flex items-center justify-center">
                                    <img src={clubImage} alt="" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-16 px-8 md:px-15" style={{ backgroundColor: 'var(--color-section1)' }}>
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            What We Do
                        </h2>
                        <p className="text-xl opacity-80 max-w-3xl mx-auto text-justify">
                            Through diverse events and workshops, we provide enriching experiences beyond academics, focusing on creativity and teamwork
                        </p>
                    </motion.div>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                    {[
                        {
                            title: 'Workshops & Training',
                            description: 'Hands-on technical workshops covering programming, robotics, AI, and emerging technologies',
                            image: workshops
                        },
                        {
                            title: 'Competitions & Hackathons',
                            description: 'Organizing coding competitions, hackathons, and scientific challenges to test skills',
                            image: hackathons
                        },
                        {
                            title: 'Community Projects',
                            description: 'Working on real-world projects that make a positive impact on our community',
                            image: projects
                        }
                    ].map((activity, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="flex-1 rounded-2xl overflow-hidden"
                            style={{ backgroundColor: 'var(--color-section2)' }}
                        >
                            <div className="h-48 overflow-hidden"
                                style={{ backgroundColor: 'var(--color-section3)' }}>
                                <img
                                    src={activity.image}
                                    alt={activity.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">{activity.title}</h3>
                                <p className="opacity-80 leading-relaxed">{activity.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </section>

            {/* Join Us CTA */}
            <section className="py-16 px-8 md:px-15">
                <motion.div
                    className="max-w-4xl mx-auto text-center p-12 rounded-2xl"
                    style={{ backgroundColor: 'var(--color-section2)' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                        Join Our Community
                    </h2>
                    <p className="text-xl opacity-80 mb-8 text-justify">
                        Be part of a vibrant community of innovators, learners, and future leaders
                    </p>
                    <motion.a
                        href="https://linktr.ee/setifian.scientific.club"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-10 py-4 rounded-lg font-semibold text-lg text-black"
                        style={{ backgroundColor: 'var(--color-accentc)' }}
                    >
                        Get Involved
                    </motion.a>
                </motion.div>
            </section>
        </div>
    );
}