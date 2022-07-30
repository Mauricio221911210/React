import { useEffect, useState } from "react"
import API from "../api/api"
import { Product, ProductRes } from "../interfaces/productInterface"

export const useProducts =()=>{
    const [product, setPorduct]=useState<Product[]>([])
  const getProducts = async () =>{
    const resp = await API.get<ProductRes>('/products');
    const pelculas = resp.data.data;
    setPorduct(resp.data.data)
  }
  useEffect(()=>{
    getProducts();
  })
          
          return{
        product
    }
}