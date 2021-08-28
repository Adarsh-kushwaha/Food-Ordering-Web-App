import React from "react";

import classes from "./Checkout.module.css";
import useInput from "../../Hooks/useInput";

const Checkout = (props) => {
  const isEmpty = (value) => value.trim() !== "";
  const isValidPostalCode = (value) =>
    value.trim() !== "" && value.length === 6;

  const {
    value: nameEntered,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameInputHasError,
    valid: enteredNameIsValid,
    reset: resetName,
  } = useInput(isEmpty);

  const {
    value: streetEntered,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    hasError: streetInputHasError,
    valid: enteredStreetIsValid,
    reset: resetStreet,
  } = useInput(isEmpty);

  const {
    value: postalEntered,
    valueChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    hasError: postalInputHasError,
    valid: enteredPostalIsValid,
    reset: resetPostal,
  } = useInput(isValidPostalCode);

  const {
    value: cityEntered,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    hasError: cityInputHasError,
    valid: enteredCityIsValid,
    reset: resetCity,
  } = useInput(isEmpty);

  let formIsValid = true;
  if (enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
      resetCity();
  resetName();
  resetPostal();
  resetStreet();
  };



  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            value={nameEntered}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && (
            <p className={classes.errorText}>Name cannot be empty</p>
          )}
        </div>
        <div className={classes.control}>
          <label htmlFor="street">Street Address</label>
          <input
            type="text"
            id="street"
            onChange={streetChangeHandler}
            onBlur={streetBlurHandler}
            value={streetEntered}
          />
          {streetInputHasError && (
            <p className={classes.errorText}>Street cannot be empty</p>
          )}
        </div>
        <div className={classes.control}>
          <label htmlFor="postal">Postal Code</label>
          <input
            type="text"
            id="postal"
            onChange={postalChangeHandler}
            onBlur={postalBlurHandler}
            value={postalEntered}
          />
          {postalInputHasError && (
            <p className={classes.errorText}>Enter Valid Postal Code</p>
          )}
        </div>
        <div className={classes.control}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
            value={cityEntered}
          />
          {cityInputHasError && (
            <p className={classes.errorText}>City Cannot Be Empty</p>
          )}
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
    </>
  );
};

export default Checkout;
