import React,{useState} from 'react'

const AddCategory = ({setCategories}) => {

    const handlerInput = (e)=>{
        setInputValue(e.target.value)
    }

    const handlerSubmit = (e)=>{
        e.preventDefault()
        console.log("submit ")
        if(inputValue.trim().length > 2){
            setCategories(cat=>[inputValue, ...cat]);
            setInputValue('');
        }
    }

    const [inputValue, setInputValue] = useState('')
    return (
        <>
            <h2>Agregar Categoria</h2>
            <form onSubmit={handlerSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handlerInput}

                /> <br />
                <input type="submit" />

            </form>
        </>
    )
}

export default AddCategory;
