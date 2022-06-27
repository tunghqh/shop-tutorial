import { useState } from 'react';



import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './Search.module.scss';

const cx=classNames.bind(style)

function Search() {
    const [searchItem,setSearchItem] = useState('')

    
    const handleSearch = (e) => {
        setSearchItem(e.target.value)
    }
    return (
        <div className={cx('search')}>
            <FontAwesomeIcon icon={faSearch} />
            <input placeholder="Tìm Kiếm" 
                value={searchItem}
                onChange={handleSearch}
            />
        </div>
    )
}

export default Search