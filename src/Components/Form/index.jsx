import "./styles.css";
import { useState } from "react";

function RegisterForm({allFinances,setFinance}) {
  const [description,setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [type,setType] = useState('entry');//colocando o primeiro para se caso ele não alterar já estar correto

function register(event){
  event.preventDefault();
  
  let itemRegister = {
    id:allFinances.length === 0 ? 0 : allFinances.length,
    itemDescription: description,
    itemValue: value,
    itemType:type
  }
  setFinance(itemRegister)

}

  return (
    <div id="div__registerForm">
      <form>
        <h3 id="form__description__title">Descrição</h3>
        <input
          type="text"
          name="form__description"
          id="form__description"
          placeholder="Digite aqui sua descrição"
         maxLength={94}
         onChange ={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="form__description" id="form__description__label">
          Ex: Compra de roupas
        </label>
        <div id="form__organizer__div">
        <div className="form__internal__div">
          <span>Valor</span>
          <input type="number" name="form__value" id="form__value" onChange ={(e) => setValue( Number (e.target.value))} />
          <span id="real__sign">R$</span>
        </div>
        <div className="form__internal__div">
          <span>Tipo de valor</span>
          <select name="form__type" id="form__type"  onChange ={(e) => setType(e.target.value)} >
            <option value="entry">Entrada</option>
            <option value="spendings">Saída</option>
          </select>
        </div>
        </div>
        <button id="form__submit__button" onClick={(e) => register(e)}>Inserir Valor</button>
      </form>
    </div>
  );
}

export default RegisterForm;
