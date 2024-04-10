import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
interface TcellProps extends ComponentProps<'td'>{
    alignRight?: boolean
}

export function TableCell({alignRight, ...props}: TcellProps){
    return(
        <td {...props} className={twMerge("py-3 px-4 text-sm text-zinc-300", props.className)}/>
    )
}