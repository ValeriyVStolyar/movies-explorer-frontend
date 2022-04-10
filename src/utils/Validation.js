import React, { useCallback, useState } from 'react';

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    console.log(value)
    console.log(name)
    console.log(target.closest('form'))
    // if ()
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/
      );
  };

  const validatePassword = (password) => {
    return String(password)
      .match(
        /^[A-Z0-9._%+-]$/
      );
  };

  const validateName = (name) => {
    return String(name)
      .match(
        /^[A-Z0-9._%+-]$/
      );
  };


  return {
    values, handleChange, errors, isValid, resetForm,
    validateEmail, validatePassword, validateName
  };
}
