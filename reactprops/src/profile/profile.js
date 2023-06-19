import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, handleName }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Profile</h2>
      <div>
        <p><strong>Name:</strong> {fullName}</p>
        <p><strong>Bio:</strong> {bio}</p>
        <p><strong>Profession:</strong> {profession}</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={handleName}>Show Name</button>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'aziz ouachem',
  bio: 'No bio available',
  profession: 'Unknown',
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;
