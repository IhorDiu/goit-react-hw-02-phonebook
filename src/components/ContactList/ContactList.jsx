// import propTypes from 'prop-types';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts().map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//     contacts: propTypes.array.isRequired,

//   };
