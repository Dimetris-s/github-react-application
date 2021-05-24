import './Pagination.scss'
import React, { memo } from "react";
import { useDispatch } from 'react-redux';
import {setCurrentPage} from '../../redux/actions/actions'

const Pagination = ({pages, currentPage}) => {

    const dispatch = useDispatch()

    return (
        <div className="pagination">
            <div className="pages">
                {pages.map((page, index) => (
                    <div 
                        key={index} 
                        onClick={() => dispatch(setCurrentPage(page))} 
                        className={currentPage == page ? 'page page--current' : 'page'}
                    >
                        {page}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default memo(Pagination) 