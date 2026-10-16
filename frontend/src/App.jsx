import { useEffect } from "react";
import { useWorkoutsContext } from "./hooks/useWorkoutsContext";
import WorkoutDetails from "./components/WorkoutDetails";
import WorkoutForm from "./components/WorkoutForm";

function App() {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Workout Budyyy</h1>
        </div>
      </header>
      <div className="pages">
        <div className="home">
          <div className="workouts">
            {workouts &&
              workouts.map((workout) => (
                <WorkoutDetails key="{workout._id}" workout="{workout}" />
              ))}
          </div>
          <WorkoutForm />
        </div>
      </div>
    </div>
  );
}

export default App;
