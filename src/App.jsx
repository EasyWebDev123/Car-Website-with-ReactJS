import { useState } from "react"
import Background from "./Components/Background/Background"
import NavBar from "./Components/NavBar/NavBar"
import Hero from "./Components/Hero/Hero"
const App = () => {

  let heroData = [
    {text1:"Dive into", text2:"what you love"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give in to", text2:"your passions"},
  ]

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <>
    <Background playStatus={playStatus} heroCount={heroCount}/>
    <NavBar/>
    <Hero playStatus={playStatus} heroCount={heroCount} setHeroCount={setHeroCount} setPlayStatus={setPlayStatus} heroData={heroData[heroCount]}/>
    </>
  )
}

export default App