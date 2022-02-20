import React from 'react'

function Button({content, href, icon}){
       
    return(
        <a href={href} target="_blank" rel="noreferrer"    >
            <button>
                <img src={icon} 
                alt="icon"/>
                {content}
            </button>  
        </a>  
    )
}

export default Button;
