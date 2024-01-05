import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sultan Dine",
    description: "Health Dog meal and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Vegetables",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Dog Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Veggies Drink Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Golden Drink",
    description: "Mexican...and Golden...",
    price: 25.99,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <li>
      <MealItem 
      id={meal.id}
      key={meal.id}
       name={meal.name}
       description={meal.description}
       price={meal.price}
/>
    </li>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
