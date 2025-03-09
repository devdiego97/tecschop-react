import React, { useState } from "react"
import { Layout } from "../../layout"
import { Col, Container,Grid,Row,Text} from "rsuite"
import { products } from "../../database/products"
import { IProduct } from "../../interfaces/product"
import "./style.css"
import { ProductCard } from "../../components/productCard"


export const Products=()=>{
   let [productsList,setProductsList]=useState<IProduct[] | null>(products)


    return <Layout>
      <Container className="page">
        <Text>Bem vindo!Aproveite as promoções e compre os melhores produtos</Text>
          <Container as="div" className="show-grids">
          <Grid fluid> 
            <Row >
              {productsList?.map((i,k)=><Col xs={6}>
                <ProductCard  product={i} key={k}/>
              </Col>)}
            </Row>
          </Grid>
        </Container>
      </Container>
    </Layout>
}