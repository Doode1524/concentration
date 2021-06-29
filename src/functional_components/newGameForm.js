import React from 'react';
import { reduxForm, Field } from 'redux-form';

const NewGameForm = ({ handleChange, handleSubmit, value }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label>Initials</label>
        
      <Field
        component="input"
        name="intitals"
        placeholder="TTT"
        onChange={handleChange}
        type="text"
        value={value}
      />
      <br></br>
      <br></br>
      <label>Number of Pictures (*2 for total cards)</label>
      <Field
        component="select"
        name="numPics"
        onChange={handleChange}
        value={value}
      >
          <option value="8">4</option>
          <option value="10">5</option>
          <option value="12">6</option>
          <option value="14">7</option>
          <option value="16">8</option>
          <option value="18">9</option>
          <option value="20">10</option>
          <option value="22">11</option>
          <option value="24">12</option>
      </Field>
      <br></br>
      <br></br>
    </div>
  </form>
)
export default reduxForm({ form: 'NewGameForm' })(NewGameForm)