import PropTypes from 'prop-types';
import css from './ContactList.module.css'

const ContactList = ({filteredContacts, onRemoveContact}) => {
  return(
    <ul>
      {filteredContacts.map(({id,name,number}) => (
        <li key = {id}>
          {name}: {number}
            <button type="button" onClick = {() => onRemoveContact(id)} className={css.list_btn}>
              Delete
            </button>
        </li>
      ))}
    </ul>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList