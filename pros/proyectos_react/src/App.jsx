import './App.css'
import {FolowCard} from './FolowCard'
export function App () {
    return(
        <section className="content_follow">
            <FolowCard img = "1.png" nombre = "Yoel" email = "yoelcolque" estado = "me gusta"></FolowCard>
            <FolowCard img="1.png" nombre = "Alan" email = "alanyoel" estado = "me gusta"></FolowCard>
            <FolowCard img="1.png" nombre = "Quispe" email = "quispecolque" estado = "me gusta"></FolowCard>
        </section>
    )
}