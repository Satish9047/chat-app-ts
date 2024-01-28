import { FC } from "react";
import Auth from "./pages/auth/Auth";
import {  AuthContextProvider} from "./contexts/authContext";

const App: FC = () => {
  return (
    <>
    <AuthContextProvider>
      <Auth />
    </AuthContextProvider>
    </>
  );
};

export default App;
