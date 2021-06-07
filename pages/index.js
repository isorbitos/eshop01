import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'
import getCommerce from '../utils/commerce'

export default function Home(props) {

  const {products} = props;

  return (
    <Layout title="Home" commercePublicKey={props.commercePublicKey}>
        <div >
        {products.map((product)=>(
          <div key={product.id}>
            <img src={product.media.source} alt={product.name}/>
            <p>{product.name}</p>
            <p>{product.price.formatted_with_symbol}</p>
            <hr></hr>
            {product.description}
          </div>
        ))}
    </div>
    </Layout>
    
  )
}


export async function getStaticProps(){
  const commerce = getCommerce();
  // we getting data and rename to products
  const { data: products } = await commerce.products.list();
  
  return{
    props:{
      products,
    }
  };
}