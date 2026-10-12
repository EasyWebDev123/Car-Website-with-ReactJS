import './Hero.css'
import pause_icon from '../../assets/pause_icon.png'
import play_icon from '../../assets/play_icon.png'
import arrow_btn from '../../assets/arrow_btn.png'
const Hero = ({heroCount,setHeroCount,playStatus,setPlayStatus,heroData}) => {
  return (

    <div className="hero">

      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="hero-explore">
        <p>Explore More</p>
        <img src={arrow_btn} alt="" />
      </div>
      
      <div className="hero-play">
        <ul className="hero-dots">
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "active" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "active" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "active" : "hero-dot"}></li>
        </ul>
      </div>

    </div>

  )
}

export default Hero