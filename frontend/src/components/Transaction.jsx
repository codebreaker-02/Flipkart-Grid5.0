import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Posts from './Posts';
import Pagination from './Pagination.jsx';

const Transaction = () => {
    const  [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://64dfef6771c3335b25832a8f.mockapi.io/transactions/users')
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    
    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    // <div className="container">
    //     <h1 className='text-white-500'>My App</h1>
    //     <Posts posts={currentPosts} loading={loading} /> 
    //     <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} />
    // </div>

    <main>
        <div className='mb-6 flex gap-3 items-center'>
            <span className='text-3xl font-bold ' style={{fontFamily: 'Poppins', color:'white'}}>Club Coins History</span>
            {/* <img src={reload} className='w-[25px] h-[25px] hover:cursor-pointer' onClick={()=>setReloadCount(reloadCount+1)} /> */}
        </div>
        <div className='bg-gradient-to-r from-rose-500 to-purple-500 rounded-2xl p-[3px] h-[70vh]'>
            <div className='bg-[#1c1c24] flex flex-col justify-center items-center arounded-2xl py-6 px-10 overflow-hidden h-full'>
                <Posts posts={currentPosts} loading={loading} /> 
                <br />
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
            </div>
        </div>
    </main>
  )
}

export default Transaction