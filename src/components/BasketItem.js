

function basketItem({item,product}){
    return(
        <div>
            {product.title} x {item.amount}
        </div>
    )
}

export default basketItem;