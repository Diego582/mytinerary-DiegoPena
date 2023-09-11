import { useSelector } from "react-redux";
import CardActivities from "../components/CardActivities";

const Activities = ({ itinerary }) => {
  let activities = useSelector((store) => store.activities.activitiesItinerary);

  return (
    <>
      <CardActivities data={activities} filter={itinerary} />
    </>
  );
};

export default Activities;
