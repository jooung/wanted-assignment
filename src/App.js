import './App.css';

import {Component, useState} from 'react';

import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';


function App() {
    const [tabValue, setTabValue] = useState('toggle');

    return (
        <div className="App">
            <div className="wrap">
                <Tab tabValue={tabValue} setTabValue={setTabValue}/>
                {
                    tabValue === 'toggle' && <Toggle/>
                }
                {
                    tabValue === 'modal' && <Modal/>
                }
                {
                    tabValue === 'tag' && <Tag/>
                }
                {
                    tabValue === 'autoComplete' && <AutoComplete/>
                }
                {
                    tabValue === 'clickToEdit' && <ClickToEdit/>
                }
            </div>
        </div>
    );

}



export default App;
