function Balance({listData}){

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

  const balance = income + expenses;

   




    return(
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">{balance!==0?`$ ${balance}`:'$0.00'}</h1>
        </>
    )
}
 
export default Balance;