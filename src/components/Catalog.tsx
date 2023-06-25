import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"

//TO DO: Evitar el uso de cadenas de texto directamente en el código (i18n -  internationalization)

//Las interface nos dice la "estructura" que tendrá un objeto
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

    //<Product[]> le dice al useState quétipo de variable esperar
    const [products, setProducts ]=useState<Product[]>([]);

    //Conectarnos a la API y obtener un JSON que tenga un arreglo de objetos
    //El hock useEffect se usa para conectarse a una fuente externa
    useEffect(()=>{
            const getProducts= async()=>{
            const response= await fetch(`http://localhost:3001/page/${idPage}/items/${items}`)
            const myProducts:Product[]=await response.json()
            setProducts(myProducts)
        }
    getProducts()

    },[idPage, items])

    //<ProductCard {...product}/> desestrucutra el objeto product con todos los atributos que debe tener(productCard.tsx)
    
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