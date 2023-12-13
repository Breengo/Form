import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import FirstStep from "./pages/FirstStep";
import SecondStep from "./pages/SecondStep";
import ThirdStep from "./pages/ThirdStep";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/first_step" element={<FirstStep />} />
        <Route path="/second_step" element={<SecondStep />} />
        <Route path="/third_step" element={<ThirdStep />} />
      </Routes>
    </div>
  );
}

export default App;
