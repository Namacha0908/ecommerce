import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Contact from "../components/Contact"
import Jumbotron from "../components/Jumbotron"
import Script from "next/script"
import {IProduct} from "../components/Product"
import ProductList from "../components/ProductList"
import iphone from "../public/iphone.png"
import {GetStaticProps} from "next"


interface IProductListProps{
  products: IProduct[]
}

export default function Home({products}: IProductListProps) {
  return (
    <div>
        <Head>
          <title>Iphone Shop</title>
          <link rel="preconnect" href="https://app.snipcart.com"/>
          <link rel="preconnect" href="https://cdn.snipcart.com"/>
          <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"/>

        </Head>

      <main className="main">
       
    <Jumbotron />
    <ProductList products={products} />
    <Contact />
      </main>
      <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"/>
      <div hidden id="snipcart" data-api-key="OWNlZTNlYmItZTU5OS00MmI4LThjOTAtMjY0NzAyYmI2ODAxNjM3NjIyMjY3MDMxMTIzMzUx"></div>

     
    </div>
  )
}


export const products: IProduct[] = [
  {
    id: "1",
    name: "iphoneX",
    price: 300,
    description: "aled",
    url: '/api/products/iphonex',
    image: iphone
  },
  {
    id: "2",
    name: "iphoneXr",
    price: 200,
    description: "aledr",
    url: '/api/products/iphonexr',
    image: iphone

  },
  {
    id: "3",
    name: "iphoneR",
    price: 100,
    description: "aled",
    url: '/api/products/iphoner',
    image: iphone

  },
]
// export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      products
    }
  }
}