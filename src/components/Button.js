import React from 'react';
import './Button.css';



function Button(props) {
    const { category, onClick, count } = props
    
    return <button 
            className="category"
            onClick={onClick}
            > 
                <span className="text-center">{category}</span>
                <div className="badge"><span className="text-center">{count}</span></div>
            </button>
}

export default Button;