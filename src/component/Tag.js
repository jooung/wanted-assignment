import React, {useState} from 'react';

const Tag = () => {
    const [tags, setTags] = useState([]);
    const addTags = (e) => {
        if (e.key === "Enter") {
            const tag = e.target.value.replace(/\s+/g, ' ');
            if (!tags.includes(tag)) {
                setTags([...tags, tag]);
            }
            e.target.value = "";
        }
    };
    const remove = (index) => {
        const tagsTemp = [...tags.slice(0, index), ...tags.slice(index + 1)];
        setTags(tagsTemp);
    }

    return (<>
        <section className="contents">
            <div className="tag-area">
                <ul className="tag-list">
                    {
                        tags.map((value, index) => {
                            return (<li key={index}>
                                {value}
                                <i onClick={(e) => remove(index)}>x</i>
                            </li>);
                    })
                    }
                    <input type="text"
                           onKeyPress={addTags}
                           spellCheck="false"
                           placeholder="Please enter to add tags"/>
                </ul>
            </div>
        </section>
    </>);
};

export default Tag;