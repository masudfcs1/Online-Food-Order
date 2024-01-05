import React,{Fragment} from 'react'
import classes from './Header.module.css'
import mealsImage from '../../assets/mealsImages.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header=(props)=>{
    return(
        <Fragment>
            <header className={classes.header} >
                <h1>FOOD Meals</h1>
                <HeaderCartButton onClickkk={props.onShowCart} />
            </header>

            <div className={classes['main-image']}>
                <img  src={mealsImage} alt="A table to Food!"/>
            </div>   

        </Fragment>
    )
}


export default Header

