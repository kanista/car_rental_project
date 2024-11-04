import Dashboard from "./Dashboard";
import AddCar from "./AddCar";
import EditCar from "./EditCar";
import AddJob from "./AddJob";
import EditJob from "./EditJob";

function App() {
  return (
   <>
       <Dashboard>
           <AddJob /> {/* This will be rendered inside the content area of Dashboard */}
       </Dashboard>
   </>
  );
}

export default App;
