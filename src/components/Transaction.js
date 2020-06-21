import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Transaction = (transaction) => {
    const sign =transaction.transaction.amount< 0 ? '-' : '+';
    const {deleteTransaction}= useContext(GlobalContext);
    return (
        
        <li className={transaction.amount < 0? 'minus' : 'plus'}>
        {transaction.transaction.text}<span>{sign}${Math.abs(transaction.transaction.amount)}</span><button 
        onClick={() => deleteTransaction(transaction.transaction.id)} className="delete-btn">x</button>
    </li>
        
    )
}
