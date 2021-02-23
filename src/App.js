import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'


function App() {
 const friendsName = ['akib', 'jaman', 'alamin', 'sabbir']

const products = [
  {name: 'laptop',price: 500},
  {name:'smart Phone', price: 100},
  {name: 'watch',price: 30},
  {name: 'gym item',price: 30},
  {name: 'shoe',price: 20}
]
// console.log(products[0]);
  return (
    <div className="App">
      <Albums></Albums>
      {/* <Posts></Posts> */}
      <Count></Count>
      <ul>
      {
         friendsName.map(name => <li>{name}</li>)
       }
      </ul>
       {
        products.map(product => <ProductsDetails name={product.name} price={product.price}></ProductsDetails>)
       }
       
      {/* <ProductsDetails pd = {products[0]}></ProductsDetails> */}
       
        
    </div>
  );
}
function Albums(){
const [album, setAlbum] = useState([])
useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/albums')
  .then(res => res.json())
  .then(data => setAlbum(data))
})
  return(
    <div>
      <p>Album Id:{album.length}</p>
      <ul>
      {
        album.map(a=> <li>{a.title}</li>)
      }
      </ul>
    </div>
  )
}




function Posts(){
  const style= {
    borderRadius:'10px',
    boxShadow: '5px 5px 10px gray',
    width: '400px'
  }
  const [post, setPost] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data))
  })
  return(
    <div>
      <h3>Post:{post.length}</h3>
      <div>
        {
          post.map(p => <p style={style}>{p.id}, {p.body}</p>)
        }
      </div>
    </div>
  )
}

function Count(){
  const [count, setCount] = useState(0)
  return(
    <div>
      <h3>Count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>dicrease</button>
    </div>
  )
}

function ProductsDetails(props){
  const style= {
    borderRadius:'10px',
    boxShadow: '5px 5px 10px gray',
    width: '400px'
  }
  // console.log(props);
  const {name, price} = props
  return(
    <div style={style}>
         <h3>Name:{name}</h3>
         <h3>Price: ${price}</h3>
         <button>buy now -> </button>
    </div>
  )
}



export default App;
