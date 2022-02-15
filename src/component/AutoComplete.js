import React, {useState} from 'react';


const AutoComplete = () => {
    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState([]);
    const data = [
        'Spider-Man: No Way Home 2021',
        'Ironman 1',
        'Ironman 2',
        'Ironman 3',
        'Thor: Love and Thunder 2021',
        'Guardians of the Galaxy 2014',
        'Avengers: Infinity War 2018',
        'Captain America: Civil War 2016',
        'Captain America: The First Avenger 2011',
        'Doctor Strange in the Multiverse of Madness 2022'
    ];
    const updateText = text => {
        setKeyword(text);
        setResults([]);
    };
    return (
        <section className="">
            <div className="autoComplete-area">
                <input
                    className="search-bar"
                    placeholder="type movie name"
                    value={keyword}
                    onChange={e => {
                        setKeyword(e.target.value);
                        let tempResults = [];
                        const tempText = e.target.value.replace(' ', '');
                        data.forEach(value => {
                            if (value.replace(' ', '').includes(tempText)) {
                                tempResults.push(value);
                            }
                        })
                        setResults(tempResults);
                    }}
                />
                <div className="search-results">
                    {
                        keyword !== '' && results.map((value, index) =>
                            <SearchView index={index} key={index} name={value} updateText={updateText}/>)
                    }
                </div>
            </div>
        </section>
    );
};

const SearchView = ({name, index, updateText}) => {
    return (
        <div
            onClick={() => updateText(name)}
            className={`search-preview ${index === 0 ? "start" : ""}`}
        >
            <div className="first">
                <p className="name">{name}</p>
            </div>

        </div>
    )
}

export default AutoComplete;