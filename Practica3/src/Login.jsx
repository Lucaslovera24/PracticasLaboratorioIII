import PropTypes from "prop-types";

const LoginUp = ({ username, updateUserName, registerUser, errorMessage }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese su nombre de usuario"
        value={username}
        onChange={(event) => {
          updateUserName(event);
          const inputValue = event.target.value;
          if (inputValue.toLowerCase().includes("o")) {
            alert("Por favor, ¡Nombres de usuario sin la letra 'o'!");
          }
        }}
      />
      <button onClick={registerUser}>Registrarse</button>

      <p>{errorMessage}</p>
      <p>Nombre de usuario: {username}</p>
    </div>
  );
};

LoginUp.propTypes = {
  username: PropTypes.string.isRequired,
  updateUserName: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default LoginUp;
