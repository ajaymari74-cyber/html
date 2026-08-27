import React from 'react';

// FIX: Capitalized 'Header' so React recognizes it as a component
export const Header = () => {
  return (
    <h1 id="header" style={{ textAlign: 'center', color: '#ff9900' }}>
      Amazon
    </h1>
  )
}

export default Header;
