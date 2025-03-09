import {useState} from "react"
function Counter()
{
    var [count,setcount] = useState("0")

    function increment(){
       setcount(Number(count)+1)
    }

    function decrement(){ 
        setcount(Number(count-1))
    }
    return(
    
    <div style={{backgroundColor:"black",color:"rgb(209, 154, 226)",textAlign:"center",padding:"5vw"}}>
<h1>{count}</h1>
<button style={{backgroundColor:"rgb(209, 154, 226)",borderRadius:"0.5vw"}}  onClick={increment}>Increment</button>
<button   style={{backgroundColor:"rgb(209, 154, 226)",borderRadius:"0.5vw"}}  onClick={decrement}>Decrement</button>
    </div>
    )
}
export default Counter
