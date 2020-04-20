


import React from 'react';
import ReactDOM from 'react-dom';



const Modal = props => {

	return ReactDOM.createPortal(

        <div 
            className="modalShade" 
            onClick={ () => props.onDismiss() }
        >
            <div className="modal">

                <img src={ props.img } alt={ props.title } />
                <span style={{ display: 'block', padding: '10px', paddingTop: '0' }}>{ props.title }</span>

            </div>
        </div>,

		document.querySelector( '#modal' )

	);

}

export default Modal;