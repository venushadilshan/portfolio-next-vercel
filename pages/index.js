import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import NavBar from '../components/NavBar'
import Cover from '../components/Cover'
import WhoAmI from '../components/WhoAmI'
import Background from '../components/Background'
import ProjectSection from '../components/ProjectSection'
import Background2 from '../components/Background2'
import DesignSection from '../components/DesignSection'
export default function Home({}) {
  return (
    <div>
      <NavBar />
      <Cover/>
      <Background/>
      <WhoAmI/>
      <Background2/>
      <ProjectSection/>
      <DesignSection/>
   
  
    </div>
  )
}
