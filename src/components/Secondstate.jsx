import React,{useState} from "react";

const SecondState=()=>{

    const [value,Setvalue] = useState(0);
    const [name,fullname] = useState('vinothu');
    const [profile,SetProfile] = useState({name:'ramu',age:'35'});
    const [array,SetArray] = useState([1,2,3]);

        return (
        <div>
            <h2>{value}</h2>
            <h3>{name}</h3>
            <h4>{profile.name}</h4>
            <h5>{profile.age}</h5>
            <h6>{array.toString()}</h6>
            <button onClick={()=>Setvalue(value + 1)}>Second</button>
            <button onClick={()=>fullname('gobi')}>ChangeName</button>
            <button  onClick={() =>SetArray((oldArr) => [...oldArr, 4])}>changevalue</button>
        
        </div>
        )
}

export default SecondState;