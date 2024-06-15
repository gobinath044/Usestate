import React,{useState} from "react";

const Firststate=()=>{

    /*const (useState,Setstate) = ()=>{

        const Statelevel = 1;

        return  <button onClick={Statelevel =()=> Statelevel + 1}></button>

    }*/

   const [value,Setvalue] = useState(1000);// Number
     const [name,fullname] = useState('god');//string   

     const [profile,SetProfile] = useState({name:'arun',age:40});//object
    const [Start,SetArray] = useState([1,2,3]);

    return  (
    <div>
        <h5>{Start}</h5>
    <h2>{profile.name}</h2>
    <h2>{profile.age}</h2>
    <button onClick={()=>SetProfile({name:'vinoth',age:50})}>Submit</button>
    <button onClick={()=>SetArray((Arrayfiled)=> [...Arrayfiled,4,5,6] )}>Array Field</button>
    {/* <button onClick={()=>fullname('arun')}>ChangeName</button>
    <button onClick={()=>Setvalue(value + 1)}> submit </button> */}

    </div> 
    )



}

export default Firststate;
/*
<h2>{value}</h2> 
    <h2>{name}</h2>
    () // Paranthesis
     {} // curalybasic
    [] //Square brackets
     && //
     || //
     
    */
    