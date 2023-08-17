

function TransactionList({listData,deleteItem}) {

  



  

  return (
    <>
      <h3>History</h3>


      <ul id="list" className="list">
        {listData.map((item) => (
          <li className={item.amount>0?'plus':'minus'}>
            {item.name} <span>{item.amount>0?'+':'-'}$ {Math.abs(item.amount)} </span>
            <button className="delete-btn" onClick = {()=>deleteItem(item.id)}>x</button>
          </li>
        ))}
      </ul>

      
    </>
  );
}
export default TransactionList;
