import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import LocalStorage from "./Components/LocalStorage";
import HandleChange from "./Components/HandleChange";
import ResLogin from "./Components/ResLogin";
function App() {
  return (
    <div>
       <ResLogin />
      <LoginPage />
      <SignupPage /> 
      <LocalStorage />
       <HandleChange /> 
    </div>
  );
}

export default App;
