import '../style/pokedexHeader.css'
const PokedexHeader = ({isLogo}) => {

  return (
    <header className={isLogo ?"header":'header-home'}>
     { isLogo && <img className='header__logo' src="./Home/pokedex.png" alt="" />}
      <div className='header__black'>
        <div className={isLogo ? `header__circle`:'header__circle-home'}></div>
      </div>
    </header>

  )
}

export default PokedexHeader