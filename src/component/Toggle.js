import React, {useState} from 'react';

const Toggle = () => {
    const [toggle, setToggle] = useState(false);

    return (<>
        <section className="contents">
            <div className={`toggle-area ${toggle ? 'active' : ''}`}>
                <h2 className="onoff">
                    {
                        toggle ? 'On' : 'Off'
                    }
                </h2>
                <div className={`toggle-btn ${toggle ? 'active' : ''}`}
                     id="toggle"
                     onClick={(e) => setToggle(!toggle)}>
                    <div className="indicator"/>
                </div>
            </div>
        </section>
    </>);
};

export default Toggle;
