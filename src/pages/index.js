import * as React from "react"
import MainLayout from "../layouts/main"
import styled from "styled-components"
import Hero from "../components/Home/Hero"
import SelectedWorks from '../components/Home/SelectedWorks'
import Reveal from '../components/Home/Reveal'

// markup
const IndexPage = () => {
  
  return (
    <MainLayout
      RevealView={() => <Reveal/> }
    >
      
      <Hero />
      <SelectedWorks />
    </MainLayout>
  )
}

export default IndexPage
