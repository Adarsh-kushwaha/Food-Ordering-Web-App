import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading]=useState(false);
  const [error, setError] = useState()

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true)
      const response = await fetch(
        "https://posthttp-d41b1-default-rtdb.firebaseio.com/meals.json"
      );
        if(!response.ok){
          throw new Error("Something went wrong  :(  try to refresh the page")
        }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false)
    };
    fetchMeals().catch((error)=>{
      setIsLoading(false)
      setError(error.message)
    })
  }, []);

  if(isLoading===true){
    return <p className={classes.loading}>Loading meals....</p>
  }

  if(error){
    return <p className={classes.error}>{error}</p>
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <div className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
