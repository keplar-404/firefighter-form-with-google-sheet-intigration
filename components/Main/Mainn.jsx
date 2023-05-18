import React from 'react'
import HeroSection from './HeroSection'
import PFAS from './PFAS'
import Health from './Health'
import Costs from './Costs'
import Qualifying from './Qualifying'
import NextSteps from './NextSteps'
import Blackarea from './Blackarea'
import Form from './Form'

function Main() {
  return (
    <>
    <div className='w-full sm:mt-72 lg:mt-36'>
    <HeroSection/>
    <PFAS/>
    <Health/>
    <Costs/>
    <Qualifying/>
    <NextSteps/>
    <Blackarea/>
    <Form/>
    </div>
    </>
  )
}

export default Main
