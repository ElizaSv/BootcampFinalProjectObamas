import ReactPaginate from "react-paginate";
import axios from 'axios'
import { useState, useEffect } from "react";

const Pagination = () => {
    const [timelineEvents, setTimelineEvents] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/events').then(result => setTimelineEvents(result.data.sort((a, b) => b.year - a.year)))  
            }, [timelineEvents.length]);

    const [pageNumber, setPageNumber] = useState(0);
    const eventsPerPage = 6;
    const pageCount = Math.ceil(timelineEvents.length / eventsPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected)
        }     
    return (
        <ReactPaginate 
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination-btn"}
            previousLinkClassName={"previous-btn"}
            nextLinkClassName={"next-btn"}
            disabledClassName={"pagination-disabled"}
            activeClassName={"active-page"}
        />
  )
}

export default Pagination