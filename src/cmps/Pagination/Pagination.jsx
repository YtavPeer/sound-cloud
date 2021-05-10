
import right from '../../assets/right.svg'
import './Pagination.scss'

export const Pagination = ({ songsPerPage, totalSongs, currentPage, paginate }) => {

    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i++) {
        pageNumber.push(i);
    }

    const nextPage = () => {
        if (currentPage >= pageNumber.length) {
            paginate(1)
        } else {
            paginate(currentPage + 1)
        }
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(number => (
                    <li key={number} className='page-item'>
                        <a href='#' onClick={() => paginate(number)} className={number === currentPage ? 'active page-item' : `page-link`}>
                            {number}
                        </a>
                    </li>
                ))}
                <a href='#' onClick={nextPage} ><img className="arrow" src={right} alt="" /></a>
            </ul>
        </nav>
    )
}

