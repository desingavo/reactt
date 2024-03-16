import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    
    if (username === 'admin' && password === '1234') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>

      {isLoggedIn ? (
        <p>Inicio de sesión exitoso</p>
      ) : (
        <p>Nombre de usuario o contraseña incorrectos</p>
      )}
    </div>
  );
}

export default Login;