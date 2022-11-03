import PropTypes from 'prop-types';
import css from './Filter.module.css'

const Filter = ({filter, formSubmitHandler}) => (
  <label className = {css.form_label}>
    Find contacts by name
    <input onChange={formSubmitHandler} 
      type="text" 
      name="filter" 
      value={filter} 
    />
  </label>
);

Filter.propTypes = {
  formSubmitHandler: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter