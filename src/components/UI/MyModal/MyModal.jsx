import React from 'react';
import cl from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal]
    if (visible) {
        rootClasses.push(cl.active)
    }

    return (
        //JOIN CLASSES
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)} >
            {/*=========STOP PROPAGATION for the special element======*/}
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
            {children}
            </div>
        </div>
    );
};

export default MyModal;
