import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import NavBar from '../components/NavBar'
import Cover from '../components/Cover'
import WhoAmI from '../components/WhoAmI'
import Background from '../components/Background'
import ProjectSection from '../components/ProjectSection'
import Background2 from '../components/Background2'
import Background3 from '../components/Background3'
import DesignSection from '../components/DesignSection'
import FeedbackSection from '../components/FeedbackSection'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
export default function Home({}) {
  return (
    <div>
      <NavBar />
      <Background3/>
      <Background2/>
      <Cover/>
      <Background/>
      <WhoAmI/>
      <Background2/>
      <ProjectSection id="projects"/>
      <DesignSection/>
      <Background3/>
      <FeedbackSection/>
      <ContactSection/>
      <Footer/>
      
   
  
    </div>
  )
}
