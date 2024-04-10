import { ComponentProps } from "react"

//Ao colocarmos 'extends ComponentProps<'elemento'> ele recebe todas as
// propriedades que o elemento tiver'

interface NavLinkProps extends ComponentProps<'a'>{
    children: string
}


//esse {...props} significa que todos os elementos enviados na chamada do componente,
// serão adicionados como atributos a tag <a>
export function NavLink(props:NavLinkProps){
    return(
        <a {...props} className="font-medium text-sm text-zinc-50">
            {props.children}
        </a>
    )
}