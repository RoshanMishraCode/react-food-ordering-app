import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "Indian, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Chicken",
    description: "Indian, chicken",
    price: 15.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((curElem) => (
    <MealItem
      key={curElem.id}
      id={curElem.id}
      name={curElem.name}
      description={curElem.description}
      price={curElem.price}
    />
  ));
  return <Card>{mealsList}</Card>;
};

export default AvailableMeals;
