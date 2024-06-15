import React from "react";

const a = 'Test';
const b =  <h1>GOBINATH</h1>
const  c = <span>Lorum contentn</span>
const G =  <p>lorum content gobivinothu</p>
 const Dynclassname = 'welcome to india'
 const DesignClassname = 'welcom to UK'

 const fun =()=> 'US';

 const BestState=()=> 'AUSTRILA SINGAPORE';

 const Variable =()=>{


    return <div className ={fun()} style={{color:'red',fontSize:'20px',width:'100px',height:'100px',backgroundColor:'#000'}}>
        {a}
        {b}
        {c}
        {fun()}
        {G}

        <div className= {BestState()}></div>
    </div>
    

}
export default Variable
