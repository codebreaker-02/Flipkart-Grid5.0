import React from 'react'

const Posts = ({ posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }
  return (
//    <ul className='new'>
//     {
//         posts.map(post => (
//             <li key={post.id} className='new'>
//                 {post.amount}
//             </li>
//         ))
//     }
//    </ul>


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
            {posts.map(post => (
                <tr>
                    <td>{ post.id }</td>
                    <td>{ post.amount }</td>
                    <td>{ post.offerId }</td>
                    <td>{ post.otherPartyAddress }</td>
                    <td>{ post.otherPartyName }</td>
                    <td>{ post.transactionNature }</td>
                    <td>{ post.transactionType }</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Posts