import React from 'react';
import classes from './Input.css'
const Input=(props)=>{
    let inputElement=null;
    const inputclasses=[classes.InputElement];

    if(props.invalid&&props.touched){
        inputclasses.push(classes.Invalid);
    }
    switch(props.elementType){
        case('input'):
            inputElement=<input className={inputclasses.join(' ')} {...props.elementConfig} value={props.Value} onChange={props.changed} />;
            break;
        case('textarea'):
            inputElement=<textarea className={inputclasses.join(' ')} {...props.elementConfig} value={props.Value} onChange={props.changed} />;
            break;
        case('select'):
            inputElement=(
            <select 
            className={inputclasses.join(' ')} 
            onChange={props.changed} 
            value={props.Value}>
                { props.elementConfig.options.map(option =>(
                    <option key={option.value}value={option.value}>{option.displayValue}</option>
                ))}
            </select>
            );
            break;
        default:
            inputElement=<input className={inputclasses.join('')} onChange={props.changed}{...props.elementConfig} value={props.Value}/>;
    }
return(
    <div className={classes.Input}>
        <label className={classes.Label}>
            {props.label}
        </label>
        {inputElement}
    </div>
);
}
export default Input
 