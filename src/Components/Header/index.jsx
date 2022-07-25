import './styles.css'

function PageHeader({logout}){ // coloquei esse nome para não confundir com a tag Header nativa
    return(
        <header className='page__header'>
            <h1 className='header__logo'><span className='header__logo__span_nu'>Nu</span> Kenzie</h1>
            <button onClick={logout} className='header__button__homepage'>Início</button>
        </header>
    )
}

export default PageHeader