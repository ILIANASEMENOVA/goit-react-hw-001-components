import css from "./Transaction.module.css"
import { TransactionItem } from "./TransactionItem"


export function TransactionHistory({ items  }) {

console.log(items);
    return (
        <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
        </thead>
  <tbody>
  {items.map(transaction => (
          <TransactionItem key={transaction.id}  item={transaction}/>
        ))}
           <tr>
     
    </tr>
  </tbody>
</table>)
}