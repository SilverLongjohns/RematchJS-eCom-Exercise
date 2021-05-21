import React, {useState} from 'react'

const Search = ({testId, onSearch}) => {
    const [searchValue, setSearchValue] = useState("")
    return (
        <div data-testid={testId}>Test
            <input data-testid={`${testId}-input`} type="text" onChange={(e) => setSearchValue(e.target.value)} />
        <button data-testid={`${testId}-button`} onClick={(() => onSearch(searchValue))}>Test</button>
        </div>
    )
}


export default Search
