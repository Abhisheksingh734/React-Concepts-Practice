import { createContext, useState } from "react";
import Level2 from "./Level2";

const AuthContext = createContext();

const authStateInitial = { userId: 123, userLoggedIn: true };

const Level3 = () => {
  const [authState, setAuthState] = useState(authStateInitial);
  return (
    <>
      <h1>Level3</h1>
      <AuthContext.Provider value={[authState, setAuthState]}>
        <Level2 />
      </AuthContext.Provider>
    </>
  );
};

export default Level3;
export { AuthContext };
