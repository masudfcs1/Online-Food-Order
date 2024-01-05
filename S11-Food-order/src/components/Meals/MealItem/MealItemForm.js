import React,{useRef,useState} from 'react'
import classes from './MealtemForm.module.css'
import Input from '../../UI/Input'

 const  MealItemForm=(props)=> {
    const [amountIsVaild,setAmountIsVaild]=useState(true)

    const amouontInputRef=useRef()

     const submitHandler = (event) => {
          event.preventDefault() 
       const enterAmount =amouontInputRef.current.value
       const enteredAmountNumber = +enterAmount

       if(enterAmount.trim().length===0||
          enteredAmountNumber<1 ||
          enteredAmountNumber>5  
        ){
            setAmountIsVaild(false)
        return
        }
       props.onAddToCart(enteredAmountNumber)
     }

  return <form className={classes.form} onSubmit={submitHandler} >
       <Input
       ref={amouontInputRef}
        label="Amount"
        input={{
        id: 'amount_'+ props.id,
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue: '1'
       }} />
       <button>+ Add</button>
       {!amountIsVaild && <p>Please Enter a Vaild Amount (1-5)</p>}
  </form>
}
export default MealItemForm