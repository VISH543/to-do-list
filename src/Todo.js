import React, { useState } from 'react';
import './todo.css';
import Listcom from './Listcom';

function Todo() {
    const [item, setItem] = useState("");
    const [newitem, setNewitem] = useState([]);
    

    const itemEvent = (event) => {
        setItem(event.target.value);
    };
    const listOfitems = ()=>{
        setNewitem((preValue)=>{
            return [...preValue , item]
        });
        
        setItem(" ")

    } ;

    return (
        <>
            <div className="box">
                <div className="center-div">
                    <br />
                    <h1>Todo List</h1>
                    <br />
                    <input type="text" value={item} className="inputText" placeholder="Add Your Task" onChange={itemEvent} />
                    <button className="btn" onClick={listOfitems}>
                        <i className="fa-solid fa-square-plus" />

                    </button>
                    <br />
                    <ul>
                        {
                            newitem.map((val ,index) => {
                                return <Listcom key ={index} text ={val}/>
                            })
                        }

                    </ul>
                </div>

            </div>
        </>
    )
}

export default Todo
