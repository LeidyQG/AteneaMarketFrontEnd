// TO DO: Complementar el componente

export const ProductCard=()=>{

    //TO DO: Conectarse a la API y obtener un listado de productos


    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
                <p className="card-text">{product.quantity}</p>
                <a href="#" className="btn btn-primary">Agregar</a>
            </div>
        </div>
    )
}

