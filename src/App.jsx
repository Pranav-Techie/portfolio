import { useState } from "react";
import Cursor from "./components/Cursor";
import AmbientBackground from "./components/ui/AmbientBackground";
import BootScreen from "./components/BootScreen";
import Home from "./pages/Home";

function App() {
  const [booted, setBooted] = useState(
    sessionStorage.getItem("booted") === "true"
  );

  const finishBoot = () => {
    sessionStorage.setItem("booted", "true");
    setBooted(true);
  };

  if (!booted) {
    return <BootScreen onFinish={finishBoot} />;
  }

  return (
    <>
      <AmbientBackground />
      <Cursor />
      <Home />
    </>
  );
}

export default App;