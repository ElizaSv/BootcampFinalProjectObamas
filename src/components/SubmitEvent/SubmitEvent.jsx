import './SubmitEvent.css'

const SubmitEvent = () => {
  return (
    <div className='submit-wrapper'>
        <div className='content-left'>
            <h2 className='submit-title'>Do you know something interesting about Obamas couple?</h2>
            <div className='descr-wrapper'>
                <h4 className='submit-descr'> If you have met or been in an event with Obama family, please fill in this form and send it to us and we will post it in our timeline!</h4>
                <span className='triangle'></span> 
            </div>
        </div>
        <div className='content-right'>
            <label for="event">What was the event?</label>
            <input type="text" placeholder=" e.g. Obama in local charity party" name="event"></input>
            <label for="year">When the event took place?</label>
            <input type="number" placeholder=" write year (e.g. 2009)" name="year"></input>
            <label for="month"> What month was that?</label>
            <input type="text" placeholder=" e.g. February" name="month"></input>
            <label for="notes">Please briefly describe what happened in event!</label>
            <input type="text" placeholder=" write your story here..." name="notes"></input>
            <label> Do you have an image from that event? </label>
            <input type="file" accept='image/*' placeholder=' choose your image'></input> 
        </div>

    </div>
  )
}

export default SubmitEvent