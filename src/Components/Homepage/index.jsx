import './styles.css'
import back from './../../img/back.png'
function HomePage({login}){
return(
    <div id='whole__space__div'>
        <div id='login__div'>
        <h1 className='app__logo'><span className='app__logo__span_nu'>Nu</span> Kenzie</h1>
        <p className='app__subtitle'>Centralize o controle das suas finanças</p>
        <label className='app__label' htmlFor="">de forma rápida e segura</label>
        <button className='app__login__button' onClick={login}>Iniciar</button>
        </div>
        <div id='div__image'>
            <img className='app__login__image' src={back} alt="" />
        </div>
    </div>
)
}

export default HomePage;