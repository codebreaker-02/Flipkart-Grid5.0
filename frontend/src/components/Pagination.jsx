const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
            pageNumbers.push(i);
    }

  return (
    <nav className="">
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className='page-item text-rose-500'>
                    <a onClick={() => paginate(number)} href="!#" className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination