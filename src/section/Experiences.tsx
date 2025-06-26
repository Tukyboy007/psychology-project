import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
        consequuntur aliquid dignissimos at quia tenetur iure maxime dolorum,
        facere eaque molestias labore quae non rerum iste sit voluptates natus
        quaerat.
      </div>
    </div>
  );
};

export default Experiences;
