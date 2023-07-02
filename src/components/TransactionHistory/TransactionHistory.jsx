import { TransactionHistoryItem } from "components/TransactionHistoryItem/TransactionHistoryItem";
import PropsTypes from 'prop-types'
import css from './TransactionHistory.module.css'

export function TransactionHistory({ items }) {
    
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
        
            {items.map((item) => {
                return (
                  <TransactionHistoryItem
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                    key={item.id}
                  />
                );
    })}
         
       </tbody>
     </table>
   ); 
}

TransactionHistory.PropsTypes = {
    items: PropsTypes.arrayOf(PropsTypes.shape({ id: PropsTypes.string.isRequired}).isRequired).isRequired
}
