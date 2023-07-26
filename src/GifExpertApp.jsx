import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    
    const [categories, setcategories] = useState(['One Punch']);
   
    const onAddCategory = (newCategory) => {
        // Valorant
        // categories.push('Valorant');
        if(categories.includes(newCategory))return;

        setcategories([newCategory,...categories])
        //setcategories(cat=>[...cat,'Valorant']);
        //primera
        //setcategories(['Valorant',...categories])

        console.log(newCategory);
    }


   // console.log(categories)

    return(
        <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
        {/* input */}
        <AddCategory 
             
             onNewCategory={onAddCategory}

            //setcategories={setcategories}

        />
        
        {/* Listado de Gif */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}

       
            { categories.map( category => 
                ( 
                    <GifGrid 
                       key={category}
                       category={category}
                    
                    />
                )
            )}
        
        {/* Gif Item */}
        </>
    )
}