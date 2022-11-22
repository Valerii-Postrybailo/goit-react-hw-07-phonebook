import css from './ContactList.module.css'

import { remove } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return(
    <ul>
      {visibleContacts.map(({id,name,number}) => (
        <li key = {id}>
          {name}: {number}
            <button type="button" onClick = {() => dispatch(remove(id))} className={css.list_btn}>
              Delete
            </button>
        </li>
      ))}
    </ul>
  )
}

