import React from "react";
import './main.css';

const Shopper = () => {
    const wares = ["gemstones", "chthonic keys", "nectar", "diamond", "ambrosia", "titan blood"]
    const warePrices = [0, 0, 0, 0, 0, 0]
    const calculator = (event) => {
        var index = event.target.id;
        var unitsSI = event.target.value;
        if(index > 0) unitsSI *= 10;
        if(index > 1) unitsSI *= 5;
        if(index > 2) unitsSI *= 10;
        if(index > 3) unitsSI *= 2;
        warePrices[0] = unitsSI;
        warePrices[1] = Math.floor(unitsSI / 10);
        warePrices[2] = Math.floor(warePrices[1] / 5);
        warePrices[3] = Math.floor(warePrices[2] / 10);
        warePrices[4] = Math.floor(warePrices[3] / 2);
        warePrices[5] = Math.floor(warePrices[4]);
        warePrices[index] = event.target.value;
    }
    const handleEnter = (event) => {
        event.preventDefault()
        const allForms = event.target.parentElement.parentElement.children;
        console.log(allForms)
        for(let i = 1; i < allForms.length; i++) {
            var formTextBox = allForms[i].children[0].children[0]
            formTextBox.value = warePrices[i-1];
        }
    }

    return(
        <div id="calculator">
            <b>price calculator!</b>
            {wares.map((item,i) => {return(<Ware name = {item} key = {i} index = {i} function = {calculator} price = {warePrices[i]} enter = {handleEnter}/>)})}
        </div>
        
    )
}

const Ware = (props) => {
    return(
        <div>
            <form onSubmit={props.enter}> 
                <input onChange={props.function} id={props.index} className = "calculatorform"/>
                <span> </span> <img src={require(`./imgs/${props.name}.png`)} className="calculatorimgs" alt = ":("></img>
                <span> </span> {props.name}
            </form>
        </div>
    )
}

const App = () => {
    return (
        <div id="container">
            <div id="shopprices">
                <Shopper/>
            </div>
        </div>
    );
}

export default App;