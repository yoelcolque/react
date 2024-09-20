import './App.css'
export function FolowCard (props){
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
            <button className="card_btn"> {props.estado} </button>
        </div>
    </article>
    )
}