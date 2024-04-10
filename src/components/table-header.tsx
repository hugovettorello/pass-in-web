import { ComponentProps } from "react";

interface TheaderProps extends ComponentProps<'th'>{}

export function TableHeader(props: TheaderProps){
    return(
        <th className="py-3 px-4 text-sm font-semibold text-left" {...props}/>
    )
}