import React from "react";

export const LoginContext = React.createContext();

function LoginContextProvider({ children }) {
  const [token, setToken] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    setToken(token);
    setUser(user);
  }, []);

  const saveUserLogin = ({ token, user }) => {
    setToken(token);
    setUser(user);

    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
  };

  return (
    <LoginContext.Provider value={{ token, user, saveUserLogin }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
