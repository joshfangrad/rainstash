import React from 'react';

import styles from './SearchBar.module.css'

const SearchBar = ({ onSearchChange, searchString }) => {
    const clearButton = [styles.clearButton];
    if (searchString !== '') { clearButton.push(styles.visible) }

    return (
        <div className={styles.searchWrap}>
            <input
                id={'searchBar'}
                className={styles.searchBar}
                type='text'
                placeholder='Search...'
                onChange={(e) => onSearchChange(e)}
            />
            <img
                alt={'clear search'}
                src={`${process.env.PUBLIC_URL}/static/close3.png`}
                className={clearButton.join(' ')}
                onClick={() => {
                    const searchBar = document.querySelector('#searchBar');
                    searchBar.value = '';
                    onSearchChange({target: searchBar});
                }}
            />
        </div>
    );
}

export default SearchBar;