import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-dark d-flex p-4">
      <img
        onClick={() => navigate('/')}
        style={{ maxWidth: '100px' }}
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
      />
    </div>
  );
};

export default Header;
