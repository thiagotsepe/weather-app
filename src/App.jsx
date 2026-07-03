import { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { WeatherCard } from './components/WeatherCard'
import { CityTitle } from './components/CityTitle'

function App() {

  return (
    <div className="min-h-screen overflow-y-auto bg-linear-to-b from-brand-start to-brand-end px-4 pt-10 flex flex-col gap-10">
      <SearchBar/>
      <CityTitle/>
      <WeatherCard/>
      
    </div>
  )
}

export default App
