
import './App.css';
import React from 'react';
    import Profile from './profile/profile';
    const App = () => {
      const handleName = () => {
        alert('Profile user: aziz ouachem*');
      };
    
      return (
        <div>
          <Profile
            fullName="aziz ouachem"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            profession="Web Developer"
            handleName={handleName}
          />
        </div>
      );
}

export default App;
