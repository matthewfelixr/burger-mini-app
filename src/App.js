import {React , useState} from "react";
import{ Routes , Route } from 'react-router-dom'

import Layout from './Layouts/Layout'
import Home from "./Pages/Home";
import BurgerMaker from "./Pages/BurgerMaker";
import BurgerContext from "./Contex/BurgerContext";

function App() {
  // Menginisiasi state 'ingredients' dan setter 'setIngredients'
  const [ingredients,setIngredients]=useState([])

  // Handler untuk menambah ingredients

  const addIngredientsHandler = (ingredient) =>{
    //menjalankan setter dengan callback function
    setIngredients (prevState => {
      //menduplikasi state 'ingredients' lama dan menambahkan ingredients baru pada index 0
      const newState = [ingredient , ...prevState]
      //return data baru
      return newState
    })
  }

  const removeIngredientsHandler=(index) =>{
    setIngredients( prevState =>{
      const newState = [...prevState]
      newState.splice( index, 1)
      return newState
    })
  }

  const moveDownIngredientsHandler = (index)=>{
    setIngredients ( prevState=> {
      const newState = [...prevState]
      const temp = newState[index+1]
      newState[index+1] = newState[index]
      newState[index]=temp
      return newState
    })
  }

  const moveUpIngredientsHandler = (index)=>{
    setIngredients ( prevState => {
      const newState = [...prevState]
      const temp = newState[index-1]
      newState[index-1] = newState[index]
      newState[index]=temp
      return newState
    })
  }
  return (
    <>
    <BurgerContext.Provider value={{ingredients, setIngredients, addIngredientsHandler, removeIngredientsHandler, moveUpIngredientsHandler, moveDownIngredientsHandler}}>
      <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/burger-maker" element={<BurgerMaker/>}/>
      </Routes>
      </Layout>
      </BurgerContext.Provider>
    </>
  );
}

export default App;
