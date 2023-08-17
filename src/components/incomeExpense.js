function IncomeExpenses({ listData }) {
  
  let positive = listData.filter((auto) => auto.amount > 0);
  let negative = listData.filter((auto) => auto.amount < 0);

  let income_array = positive.map(function (item) {
    return parseInt(item.amount, 10);
  });
  let expenses_array = negative.map(function (item) {
    return parseInt(item.amount, 10);
  });
  const income = income_array.reduce((partialSum, a) => partialSum + a, 0);
  const expenses = expenses_array.reduce((partialSum, a) => partialSum + a, 0);

  

  

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">{expenses}</p>
      </div>
      
    </div>
  );
}

export default IncomeExpenses;
