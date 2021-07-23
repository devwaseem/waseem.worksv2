import * as React from "react"
import MainLayout from "../layouts/main"
import styled from "styled-components"
import Hero from "../components/Home/Hero"
import SelectedWorks from '../components/Home/SelectedWorks'
import Reveal from '../components/Home/Reveal'
import MoreWorks from '../components/Home/MoreWorks'

// markup
const IndexPage = () => {
  
  return (
    <MainLayout
      RevealView={() => <Reveal/> }
    >
      
      <Hero />
      <SelectedWorks />
      <MoreWorks />
    </MainLayout>
  )
}

export default IndexPage
