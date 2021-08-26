import React from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

export const Meals = (props) => {
    return (
        <React.Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </React.Fragment>
    )
}
