import React from 'react'
import Header from '../components/Header';
import {useState,useEffect} from 'react';
import Product from '../components/Product';
import products from '../products.json'
import Basket from '../components/Basket';
import {Link} from "react-router-dom";


function Home() {
    const [money, setMoney] = useState(10000000000);
    const [basket,setBasket] = useState([]);
    const [total,setTotal] = useState(0);
  
    const resetbasket = () =>{
      setBasket([]);
    }
  
    useEffect (() => {
      setTotal 
      (
        basket.reduce((acc,item) =>{
          return acc + (item.amount * (products.find(product => product.id === item.id).price))
        },0),
        )
    }, [basket])
  
    return (
      <>
        <Header total={total} money={money}/>
        <div className='container'>
        {products.map(product =>(
          <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product}/>
        ))}
        </div>
          <div className='llink1'><Link to="/" exact>Çıkış Yap</Link></div>
        <div className='sfr'>
          <Basket products={products} basket={basket} total={total}></Basket>
          <button className='sfr-btn' disabled={total===0} onClick={resetbasket}>Sıfırla</button>
        </div>
      </>
    );
}

export default Home