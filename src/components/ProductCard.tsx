export const ProductCard=(product:any)=>{
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Precio: ${product.price}</p>
                <p className="card-text">Disponible: {product.quantity}</p>
                <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
        </div>
    )
}