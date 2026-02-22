import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <MainLayout>
        <AppRoutes />
      </MainLayout>

      <Toaster position="top-center" />
    </>
  );
}

export default App;
