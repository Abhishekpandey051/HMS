import React from 'react'
import Header from '../component/Header'
import SpecialityMenu from '../component/SpecialityMenu'
import TopDoctor from '../component/TopDoctor'

function Home() {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctor/>
    </div>
  )
}

export default Home