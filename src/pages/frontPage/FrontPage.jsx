import "./frontPage.css";
import TimelineSection from "../../components/TimelineSection/TimelineSection";
import VerticalTimeline from "react-vertical-timeline-component/dist-modules/VerticalTimeline";
import TopSection from "../../components/TopSection/TopSection";
import NavIcons from "../../components/NavIcons/NavIcons";

const FrontPage = () => {
  return (
    <div className="parallax">
      <NavIcons />
      <TopSection />
      <VerticalTimeline>
        <TimelineSection />
      </VerticalTimeline>
    </div>
  );
};
export default FrontPage;
