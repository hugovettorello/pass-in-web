import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<'button'>{
    transparent?: boolean
}


//{transparent, ...props} remove a a propriedade transparent do objeto props
//e deixando somente o restante.
//antes o código era assim: export function IconButton(props:IconButtonProps){}
//fizemos uma desestruturação no props e utilizamos o REST Operator.

export function IconButton({transparent, ...props}: IconButtonProps){
    return(
        <button 
            {...props} 
            // className={transparent?
            //     "bg-black/20 border border-white/10 rounded-md p-1.5"
            //     :
            //     "bg-white/10 border border-white/10 rounded-md p-1.5"
            // }
            className={twMerge(
                "bg-white/10 border border-white/10 rounded-md p-1.5",
                transparent? 'bg-black/20' : 'bg-black/10',
                props.disabled ? 'opacity-50' : null
                
            )}
        />
    )
}