import React from 'react';
import cl from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal]
    if (visible) {
        rootClasses.push(cl.active)
    }

    return (
        //СКЛЕИТЬ КЛАССЫ
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)} >
            {/*=========STOP PROPAGATION отключает срабатывание предыдущего ивента конкретно на элементе======*/}
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
            {children}
            </div>
        </div>
    );
};

export default MyModal;
