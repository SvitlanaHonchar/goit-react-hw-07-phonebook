import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <>
      👨🏻‍🦱 {contact.name}: {contact.phone}
      <button
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
        type="button"
      >
        Remove contact
      </button>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.object,
};
