import React, { useContext } from 'react'

import style from './controller.module.css'
import AddButton from './AddButton'
import MapItem from './MapItem'
import BurgerContext from '../../Contex/BurgerContext'
const Controller = () => {

  const ctx = useContext(BurgerContext);

  return (
    <>
    <div className={style.ingredients_selector}>
        <h5>Add ingredients</h5>
        <div>
            <AddButton label="Patty" clickHandler={() => ctx.addIngredientsHandler('patty')}/>
            <AddButton label="Lettuce" clickHandler={() => ctx.addIngredientsHandler('lettuce')}/>
            <AddButton label="Tomato" clickHandler={() => ctx.addIngredientsHandler('tomato')}/>
            <AddButton label="Cheese" clickHandler={() => ctx.addIngredientsHandler('cheese')}/>
            <AddButton label="Bun" clickHandler={() => ctx.addIngredientsHandler('bun')}/>
        </div>
    </div>

    <div className={style.ingredients_map}>
      {/* Loop untuk membuat list ingredients sesuai urutan aray */}
      {ctx.ingredients.map ( (item,index) => {
        return (
          <>
          {/* Merender mapItem untuk setiap item dari'ingredients */}
          <MapItem
            label={item}
            key={index}
            removeHandler={() => ctx.removeIngredientsHandler(index)} 
            upHandler={() => ctx.moveUpIngredientsHandler(index)}
            downHandler={() => ctx.moveDownIngredientsHandler(index)}
            firstItem={ index=== 0}
            lastItem={index===ctx.ingredients.length -1 }
            />
          </>
        )
      })}
    </div>
    </>
  )
}

export default Controller