import "../MapSection/basicMap.css"
const MapBtn = (props) => {
  return (
    <button className="locationBtn" onClick={props.showMyLocation}>Locate Me</button>
  )
}

export default MapBtn