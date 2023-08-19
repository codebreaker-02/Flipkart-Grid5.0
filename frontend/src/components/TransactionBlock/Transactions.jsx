import React from 'react'

const Transactions = ({ transactions, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }
  return (
    <table className='table-auto text-white '>
        <thead className='text-rose-500' style={{fontFamily:'Poppins'}}>
            <tr className='text-xs'>
                <th>ID</th>
                <th>AMOUNT</th>
                <th>OFFER-ID</th>
                <th>OTHER PARTY ADDRESS</th>
                <th>OTHER PARTY NAME</th>
                <th>TRANSACTION NATURE</th>
                <th>TRANSACTION TYPE</th>
            </tr>
        </thead>
        <tbody>
            {transactions.map(transaction => (
                <tr>
                    <td>{ transaction.id }</td>
                    <td>{ transaction.amount }</td>
                    <td>{ transaction.offerId }</td>
                    <td>{ transaction.otherPartyAddress }</td>
                    <td>{ transaction.otherPartyName }</td>
                    <td>{ transaction.transactionNature }</td>
                    <td>{ transaction.transactionType }</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Transactions