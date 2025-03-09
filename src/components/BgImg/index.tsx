import { Box } from "./style"


type Props={
    src: string;
    width: string | number;
    height: string | number;
}
export const BgImg=({...rest}:Props)=>{
 return <Box {...rest} />
}