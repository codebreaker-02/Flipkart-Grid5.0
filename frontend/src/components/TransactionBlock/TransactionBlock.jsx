import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Transactions from './Transactions';
import Pagination from './Pagination';

const TransactionBlock = () => {
    const  [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [transactionsPerPage, setTransactionsPerPage] = useState(6);

    useEffect(() => {
        const fetchTransactions = async () => {
            setLoading(true);
            const res = await axios.get('https://64dfef6771c3335b25832a8f.mockapi.io/transactions/users')
            setTransactions(res.data);
            setLoading(false);
        }

        fetchTransactions();
    }, [])

    const indexOfLastPost = currentPage * transactionsPerPage;
    const indexOfFirstPost = indexOfLastPost - transactionsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstPost, indexOfLastPost);
    
    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <main className='transactionBlock'>
        <div className='mb-6 flex gap-3 justify-center items-center'>
            <span className='text-3xl font-bold' style={{fontFamily: 'Poppins', color:'white'}}>Club Coins History</span>
        </div>
        <div className='bg-gradient-to-r from-rose-500 to-purple-500 rounded-2xl p-[3px] h-[70vh] transaction-table'>
            <div className='bg-[#1c1c24] flex flex-col justify-center items-center rounded-2xl py-6 px-10 h-full'>
                <Transactions transactions={currentTransactions} loading={loading} /> 
                <br />
                <Pagination transactionsPerPage={transactionsPerPage} totalTransactions={transactions.length} currentPage={currentPage} paginate={paginate}/>
            </div>
        </div>
    </main>
  )
}

export default TransactionBlock