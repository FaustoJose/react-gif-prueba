import {React,useState} from 'react';

export const AddCategory = ({onNewCategory}) => {

const [inputValue, setInputValue] = useState('');
// const onInputChange=(event)=>{
//     setInputValue(event.target.value)
// }
const onInputChange=({target})=>{
    setInputValue(target.value)
}

const onSubmit = (event) => {
    event.preventDefault();
    //console.log(inputValue);
    if(inputValue.trim().length <= 1) return;
    
    onNewCategory(inputValue.trim());
    //setcategories(cat=>[...cat,inputValue]);
    setInputValue('');
}

  return (
    <form onSubmit={onSubmit}>
        {/* <form onSubmit={ (event) => onSubmit(event) }></form> */}
        <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        //onChange={(event)=>onInputChange(event)}
        onChange={onInputChange}
        />
    </form>
  )
}
