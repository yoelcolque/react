import './App.css'
import { useState } from 'react';

export function FolowCard (props){
    const [isFollow, setisFollow] = useState(props.estado);
    
    const cambiarEstado = () => {
        setisFollow(!isFollow)
    }

    const text = isFollow ? 'Suigiendo' : 'Seguir';
    const btnClassNameFollow = isFollow ? 'card_btn' : 'card_btn is_follow';

    return(
    <article className = "content_card">
        <div className="card_content_img">
            <img src= {`../src/data/${props.img}`} alt="" className="card_img" />
        </div>
        <div className="card_content_text">
            <h1 className="card_text_title"> {props.nombre}</h1>
            <span className="card_text_email"> @{props.email}</span>
        </div>
        <div className="card_content_btn">
            <button className= {`${btnClassNameFollow}`} onClick={cambiarEstado}> {text} </button>
        </div>
    </article>
    )
}