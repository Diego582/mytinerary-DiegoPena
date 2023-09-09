import { useSelector } from "react-redux";
import CardActivities from "../components/CardActivities";

const Activities = () => {
  let activities = useSelector((store) => store.activities.activitiesItinerary);
  console.log(activities);
  return (
    <>
      <CardActivities data={activities} />
    </>
  );
};

export default Activities;
