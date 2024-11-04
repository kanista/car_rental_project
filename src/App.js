import './App.css';
import Dashboard from "./Dashboard";
import AddCar from "./AddCar";
import EditCar from "./EditCar";

function App() {
  return (
   <>
       <Dashboard>
           <EditCar /> {/* This will be rendered inside the content area of Dashboard */}
       </Dashboard>
   </>
  );
}

export default App;
