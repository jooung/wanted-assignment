import React, {useState} from 'react';

const ClickToEdit = () => {
    const [age, setAge] = useState('');
    const [name, setName] = useState('');

    return (<>
        <section className="contents">
            <div className="clickToEdit-area">

                <div>
                    <p>이름은 <span id='result'>{name}</span></p>
                    <p>나이는 <span id='resultAge'>{age}</span></p>
                </div>
                <form>
                    <label>Name </label>
                    <input type="text"
                           placeholder="이름"
                           id='name'
                           onChange={(e) => setName(e.target.value)}/>
                    <br/>
                    <label>Age </label>
                    <input type="number"
                           placeholder="나이"
                           id='age'
                           onChange={(e) => setAge(e.target.value)}/>
                </form>

            </div>
        </section>
    </>);
};

export default ClickToEdit;