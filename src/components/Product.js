import { useState } from "react";
import {moneyFormat} from '../Helpers'

function Product({product,basket,setBasket,total,money}){

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id);
        //ürün daha önceden eklenmiş demek
        if(checkBasket){
            checkBasket.amount += 1;
            setBasket([...basket.filter(item => item.id !== product.id),checkBasket])
        }
        else{
            setBasket([...basket,{
                id:product.id,
                amount:1
            }])
        }
    }

    const removeBasket = () =>{
        const currentBasket=basket.find(item => item.id === product.id);
        const basketWithOutCurrent= basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1;
        if(currentBasket.amount === 0){
            setBasket([...basketWithOutCurrent]);
        }
        else{
            setBasket([...basketWithOutCurrent,currentBasket])
        }
    }

    return(
        <>
            <div className="product">
                <img src={product.image}/>
                <div className="title">{product.title}</div>
                <div className="price">$ {moneyFormat(product.price)}</div>
                <div className="actions">
                <div>
                    {basketItem && basketItem.amount > 0 &&(
                         <p className="amount">{basketItem && basketItem.amount || 0} Adet Sepetinize Eklendi.</p>
                    )||(
                        <p className="amount">0 Adet Sepetinize Eklendi. </p>

                    )}
                    <button className="by-btn" disabled={total+product.price>money} onClick={addBasket}>Satın Al</button>                                       
                    <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>Sat</button>
                    </div>        
                </div>
                <style jsx="true">{`
                    .product{
                        float:left;
                        padding:1.2%;
                        background:#ffffff;
                        margin:1%;
                        width:13vw;
                        flex-direction: column;
                        border: 1px solid rgb(0, 0, 0);
                        align-items: center;
                        justify-content: center;
                        overflow: auto;
                    }
                    .product img{
                        float:left;
                        height:20vh;
                        width:10vw;
                        flex-wrap:wrap;
                    }
                    .title{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin:0 auto;
                        flex-wrap:wrap;
                        font-size: 2.5vh;
                    }
                    .price{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin:0 auto;
                        flex-wrap:wrap;
                        font-size: 2.2vh;
                    }
                    .product button{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin:0 auto;
                        flex-wrap:wrap;
                        font-size: 2vh;
                    }
                    .actions{
                        height: 15%;
                        display: flex;
                        text-align: center;
                        float:left;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin:0 auto;
                        font-size: 2.3vh;
                    }
                    .actions button{
                        background: linear-gradient(#30A6AA,#2C6ACC);
                        color: #ffffff;
                        box-sizing:border-box;
                        flex-wrap:wrap;
                        justify-content:center;
                        margin-top:10%;
                        padding: 3%;
                        width: 100%;
                        height: 100%;
                        border: 2px solid rgb(0, 0, 0);
                        font-size: 2.3vh;
                    }
                    .actions button:disabled{
                        background: #747474;
                        font-size: 2.3vh;
                    }
                    .actions amount{
                        font-size: 2.3vh;
                    }
                    `}
                </style>
            </div>
        </>

    );
}

export default Product;
