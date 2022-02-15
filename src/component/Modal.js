import React, {useState} from 'react';

const Modal = () => {
    const [open, setOpen] = useState(false);

    return (<>
        <section className="contents">
            <div className="modal-area">
                <button onClick={(e) => !open && setOpen(true)}
                        id="open">
                    Modal
                </button>
                <div className={`modal ${open ? '' : 'hidden'}`}>
                    <div className="modal-overlay" onClick={(e) => open && setOpen(false)}/>
                    <div className="modal-box" onClick={(e) => open && setOpen(false)}>
                        <h1>Hi</h1>
                        <button>Close</button>
                    </div>
                </div>
            </div>
        </section>
    </>);
};

export default Modal;