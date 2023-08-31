
interface CardProps{
    price:number,
    title:string,
    image:string
}

export function Card({price, title, image}:CardProps){
    return(
        <div className="card">
            <img>
            <h2></h2>
            </img>
            <p><b>Valor: </b>{price}</p>
            <h2>{title}</h2>
            <img src={image}/>
        </div>
    )

}