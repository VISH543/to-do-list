import React,{useState} from 'react'

function Listcom(props) {
    const [line, setLine] = useState(false);
    
    const cutIt = () => {
        setLine(true);

    };
    return (
        <>
            <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text} <i className="fa-solid fa-circle-xmark" style={{ color: " #f04005" }} onClick={cutIt} /></li>
        </>
    )
}

export default Listcom