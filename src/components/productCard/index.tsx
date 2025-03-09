import React from "react"
import { IProduct } from "../../interfaces/product"
import { Button, Card,HStack,Image,Tag,Text} from "rsuite"
import { BgImg } from "../BgImg"
import { useNavigate } from "react-router-dom"



type Props={
    product:IProduct
}

export const ProductCard=({product}:Props)=>{
    const navigate=useNavigate()


    return <Card style={{margin:'12px'}}>
       <BgImg height={350} width={"auto"} src={product.imgs[0]}  />
       <Card.Header>
        <Text maxLines={1}>{product.name}</Text>
       </Card.Header>
       <Card.Body>
            <HStack justifyContent="space-around" style={{margin:'25px 0'}}>
                <Tag color="green" size="lg">{product.mark}</Tag>
                <Tag color="blue" size="lg">{product.model}</Tag>
            </HStack>
            <Button block onClick={()=>navigate(`/products/${product.id}/${product.name.toLowerCase()}`)} size="lg" appearance="primary" color="blue">detalhes</Button>
       </Card.Body>
    </Card>
}