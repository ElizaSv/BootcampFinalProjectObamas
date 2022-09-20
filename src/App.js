import './App.css';
import TimelineSection from './components/TimelineSection';
import TopSection from './components/TopSection';
import eventData from './data';

function App() {
  const sortedTimeline = eventData.sort((a, b) => b.year - a.year) //This should later go in useState()
  const timelineElement = sortedTimeline.map(elem => { 
    return <TimelineSection 
        year = {elem.year}
        month = {elem.month}
        event = {elem.event}
        notes = {elem.notes}
        external = {elem.external}
    />
  })
  return (
    <>
      <TopSection />
      <>{timelineElement}</>
    </>
  );
}

export default App;
