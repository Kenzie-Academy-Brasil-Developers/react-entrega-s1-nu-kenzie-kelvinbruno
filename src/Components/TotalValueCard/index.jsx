import "./styles.css";

function TotalValueCard({allFinances}){

    return(
        <div id="div__total__value">
            <span id="span__total__value">Valor Total:</span>
            <span id="total__value">R$ {allFinances.reduce(function(count, item) {
          
  return item.itemType ==='entry'? count + item.itemValue:count - item.itemValue;
}, 0).toFixed(2)}</span>
            <label id="label__total__value">O valor se refere ao saldo.</label>
        </div>
    )

}

export default TotalValueCard