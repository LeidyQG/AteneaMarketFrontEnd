import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"

//TO DO: Evitar el uso de cadenas de texto directamente en el código (i18n -  internationalization)

interface Product{
  id:number,
  name:string,
  description:string,
  price:number,
  quantity:number
}

interface PageProps{
    idPage:string,
    items: string
}

export const Catalog = ({idPage, items}:PageProps)=>{   

    const [products, setProducts ]=useState<Product[]>([]);

    //Conectarnos a la API y obtener un JSON que tenga un arreglo de objetos
    useEffect(()=>{
            const getProducts= async()=>{
            const response= await fetch(`http://localhost:3001/page/${idPage}/items/${items}`)
            const myProducts:Product[]=await response.json()
            setProducts(myProducts)
        }
    getProducts()

    },[idPage, items])

    return(
        <div className="container">
            <h1>Catálogo de Productos</h1>
            <div className="row">
                { products.map(
                    (product)=>(
                        <div key={product.id} className="col-4">
                            <ProductCard {...product}/>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}