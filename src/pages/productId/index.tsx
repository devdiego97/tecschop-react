import React, { useState } from "react"
import { Layout } from "../../layout"
import { Card,Text, Container, FlexboxGrid, Heading, HStack, Tag, Button } from "rsuite"
import { useParams } from "react-router-dom"
import { products } from "../../database/products"
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem"
import { BgImg } from "../../components/BgImg"
import { IProduct } from "../../interfaces/product"
import "./style.css"


export const ProductId=()=>{
  const params=useParams()
   const {id}=params
   const  productId=products.find(i=>i.id === parseInt(id as string)) as IProduct
  const [imgActive,setImageActive]=useState<string>(productId.imgs[0])

    return <Layout>
       <Container className="show-grid page">
        <FlexboxGrid>
          <FlexboxGridItem colspan={12}>
              <BgImg  height={600} width={"auto"} src={imgActive} />
              <Container>
                <Text as="p" color="cyan">Imagens do produto</Text>
                  <div className="grid-imgs">
                    {
                      productId.imgs.map((i,k)=><div className="img" key={k} onClick={()=>setImageActive(i)} >
                        <BgImg src={i} height={90} width={90} />
                      </div>)
                    }
               </div>
        </Container>
          </FlexboxGridItem>
          <FlexboxGridItem colspan={12}>
            <Card className="card">
               <Card.Header>
                 <Heading>{productId.name}</Heading>
               </Card.Header>
               <Card.Body>
                  <HStack>
                     <Tag size="lg">{productId.mark}</Tag>
                     <Tag size="lg">{productId.model}</Tag>
                  </HStack>
                  <Text className="price">R${productId.price.toFixed(2).replace('.',',')}</Text>
                 <Container className="desc">
                    <Heading>Descrição</Heading>
                    <Text className="p">{productId.about}</Text>
                 </Container>
               </Card.Body>
               <Card.Footer className="footer-card">
                   <Button className="btn" block size="md" appearance="primary" color="blue">comprar</Button>
               </Card.Footer>
            </Card>
          </FlexboxGridItem>
        </FlexboxGrid>
       </Container>
    </Layout>
}