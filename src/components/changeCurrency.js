import React, { useState,useContext,useEffect } from 'react';import { AppContext } from '../context/AppContext';

const Curr = () => {const [currency, setCurrency] = useState('');const { dispatch } = useContext(AppContext);

const handleChange = (event) => {
    setCurrency(event.target.value);
    //changeCurrency();
  };

  const changeCurrency = () => {
    dispatch({
        type: 'CHG_CURRENCY',
        payload: currency,
    });
  }

useEffect(() => {changeCurrency();console.log(currency);}, [currency] )

return (
    <div className="alert alert-secondary">
    <select id="inputGroupSelect02" class="btn btn-dark" onChange={handleChange}>
            <option value="">Currency</option>
            <option value="$" name="dollar">$ Dollar</option>
            <option value="£" name="pound">£ Pound</option>
            <option value="€" name="euro">€ Euro</option>
            <option value="₹" name="rupee">₹ Rupee</option>
              </select>
              </div>
);
};
export default Curr;