import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: 1,
    name: "Fish",
    description: "Rehu fish",
    price: 22.99,
  },
  {
    id: 2,
    name: "Paneer",
    description: "Spacial paneer",
    price: 16.5,
  },
  {
    id: 3,
    name: "Dal",
    description: "Indian Dal",
    price: 12.99,
  },
  {
    id: 4,
    name: "Chicken",
    description: "Indian chicken",
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
