import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className="page__wrapper">
            {
                pagesArray.map((i) => <span
                    onClick={() => changePage(i)}
                    key = {i}
                    className={page === i ? 'page page__current' : 'page'}
                >
                    {i}
                </span>)
            }
        </div>
    );
};

export default Pagination;