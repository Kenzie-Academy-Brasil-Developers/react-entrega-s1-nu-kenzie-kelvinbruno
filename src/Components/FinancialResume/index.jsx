import "./styles.css";
import { useState } from "react";

function FinancialResume({allFinances,deleteFinance}) {
const [selectedType,setSelectedType] = useState('all');


let lista = selectedType ==='all'? allFinances: allFinances.filter((e)=> e.itemType === selectedType)

  return (
    <div id="financial__resume__whole__area">
      <div id="financial__resume__tabs">
        <span id="financial__resume__tabs__title">Resumo financeiro</span>
        <ul id="financial__resume__tabs__list">
          <li className="financial__resume__tabs__list__item">
            <button onClick={(e) => setSelectedType('all')}  className={selectedType === 'all'?'financial__resume__tabs__list__item__button financial__resume__tabs__list__item__selected':'financial__resume__tabs__list__item__button'}>
              Todos
            </button>
          </li>
          <li className="financial__resume__tabs__list__item">
            <button onClick={(e) => setSelectedType('entry')} className={selectedType === 'entry'?'financial__resume__tabs__list__item__button financial__resume__tabs__list__item__selected':'financial__resume__tabs__list__item__button'}>
              Entradas
            </button>
          </li>
          <li className="financial__resume__tabs__list__item">
            <button onClick={(e) => setSelectedType('spendings')} className={selectedType === 'spendings'?'financial__resume__tabs__list__item__button financial__resume__tabs__list__item__selected':'financial__resume__tabs__list__item__button'}>
              Despesas
            </button>
          </li>
        </ul>
      </div>
      <div id="financial__resume__div">
        <ul className="financial__resume__financial__list" >
          
        {
          allFinances.length ===0 ? <h3>Você ainda não possui nenhum lançamento </h3>:
           lista.map((element, index) => (
             
            <li key={index}  className={element.itemType === 'entry'?'financial__resume__financial__list__item financial__resume__financial__list__item__entry':'financial__resume__financial__list__item financial__resume__financial__list__item__spendings'} >
               <span className="financial__resume__financial__list__item__title">{element.itemDescription}
            </span>
            <span className="financial__resume__financial__list__item__value">
              R$ {element.itemValue.toFixed(2)}
            </span>
            <label className={element.itemType === 'entry'?'financial__resume__financial__list__item__type financial__resume__financial__list__item__type__entry'  :"financial__resume__financial__list__item__type financial__resume__financial__list__item__type__spendings"}>
            {element.itemType === 'entry'?'Entrada'  :" Saída"}
            </label>
            <button id={index} onClick={(e) => (deleteFinance( Number(e.target.id)))} className="financial__resume__financial__list__item__delete_button">
              <i id={index} onClick={(e) => (deleteFinance( Number(e.target.id)))} class="fa-solid fa-trash"></i> 
              {/* colocado nos dois porque no mobile dava problema */}
            </button>
               </li>
           ))}
       
          {/* <li className="financial__resume__financial__list__item financial__resume__financial__list__item__spendings" >
            <span className="financial__resume__financial__list__item__title">
              Investimento - Carro 
            </span>
            <span className="financial__resume__financial__list__item__value">
              R$ 856,00
            </span>

            <label className="financial__resume__financial__list__item__type financial__resume__financial__list__item__type__spendings">
              Saída
            </label>
            <button className="financial__resume__financial__list__item__delete_button">
              <i class="fa-solid fa-trash"></i>
            </button>
          </li>

          <li className="financial__resume__financial__list__item financial__resume__financial__list__item__entry">
            <span className="financial__resume__financial__list__item__title">
              Investimento-Carro
            </span>
            <span className="financial__resume__financial__list__item__value">
              R$ 856,00
            </span>

            <label className="financial__resume__financial__list__item__type financial__resume__financial__list__item__type__entry">
              Entrada
            </label>
            <button className="financial__resume__financial__list__item__delete_button">
              <i class="fa-solid fa-trash"></i>
            </button>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default FinancialResume;
