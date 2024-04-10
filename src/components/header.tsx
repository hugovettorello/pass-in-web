import nlwIcon from '../assets/nlw-unite-icon.svg'
import { NavLink } from './nav-link'
export function Header(){
    return(
        <div className="flex items-center gap-5 py-2">
            <img src={nlwIcon}/>

            <nav className="flex gap-5">
                <NavLink >Eventos</NavLink>
                <NavLink>Paritcipantes</NavLink>
            </nav>
        </div>
    )
}