import PageHeader from "../Header";
import RegisterForm from "../Form";
import TotalValueCard from "../TotalValueCard";
import FinancialResume from "../FinancialResume";
import { useState } from "react";
import './styles.css'

function Control({logout}) {
  
 

  const [allFinances, setAllFinances] = useState([]);
  function setFinance(newFinance) {
    setAllFinances([...allFinances, newFinance]);
  }

  function deleteFinance(id){
    console.log(id)
    let filteredArray = allFinances.filter((element)=>{ return element.id !== id})
    setAllFinances(filteredArray)
  }

  return (
    <div>
      
      <PageHeader logout={logout}/>
      <main>
      <div id="div__control__register__and__totalvalue">
      <RegisterForm setFinance = {setFinance}  allFinances={allFinances}/>
      <TotalValueCard allFinances={allFinances} />
      </div>
      
      <FinancialResume allFinances={allFinances} deleteFinance ={deleteFinance} />
      </main>
    </div>
  );
}

export default Control;
