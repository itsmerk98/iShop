// import { Pages } from '@mui/icons-material'
import React from 'react'

const Pagination = ({ totalPages, postPerPage, setCurrentPage, currentPage }) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPages / postPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='numberofpages'>
            {
                pages.map((page, index) => {
                    return (<button className={`number ${page === currentPage ? 'active' : ''}`} onClick={() => setCurrentPage(page)} key={ index } >{page}</button>)
                })
            }
        </div>
    )
}

export default Pagination