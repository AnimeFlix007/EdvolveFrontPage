import React from 'react'
import '../assets/css/home.css'
import Members from './Members'
import Stats from './Stats'

import Upcoming from './Upcoming'

import {UpcomingExperiencesData, UpcomingClassesesData} from "../data";

const Home = () => {
  return (
    <div className='home'>
        <div className='greetings'>
            <h2 className='greetingHeading'>&#128075; Welcome back, Jenny !!</h2>
            <p className='greetingSubHeading'>How are you today ?</p>
        </div>
        <section className='dashboardMainSection'>
            <div className='leftSection'>
                <Upcoming title="Your Upcoming Experiences" Data={UpcomingExperiencesData} />
                <Upcoming title="Your Upcoming Classes" Data={UpcomingClassesesData} />
            </div>
            <div className='rightSection'>
                <Stats />
                <Members />
            </div>
        </section>
    </div>
  )
}

export default Home