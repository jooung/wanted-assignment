import React from 'react';

const Tab = (props) => {
    const tabValueList = ['toggle', 'modal', 'tag', 'autoComplete', 'clickToEdit']
    return (<>
        <div>
            <div className="tab-menu">
                <ul className="list">
                    {
                        tabValueList.map((value, index) => {
                            return (<li className={props.tabValue === value ? 'on' : ''}
                                       key={index}
                                       onClick={(e) => props.setTabValue(value)}>
                                <button className='tabBtn'>
                                    {value}
                                </button>
                            </li>);
                        })
                    }
                </ul>
            </div>
        </div>
    </>);
};

export default Tab;