import axios from 'axios'
import './SubmitEvent.css'
import { useForm } from "react-hook-form";

const SubmitEvent = () => {
 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = formData =>
        {
        console.log("--------------------------------------");
        const createdEvent = JSON.stringify(formData);
        console.log(createdEvent)
        axios
        .post('http://localhost:8000/events/new', createdEvent ,{headers: {'Content-Type': 'application/json'}})
        .then(response => console.log(response.data))
        .catch(error => {console.log(error.data)});
        } 

 
    // console.log(watch("event"));
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="event">What was the event?</label>
                    <input type="text" placeholder=" e.g. Barack Obama in local charity party" name="event" {...register("event", { required: true })}></input>
                    {errors.event && <span className="error-msg">This field is required</span>}<br />
                    <label htmlFor="year">When the event took place?</label>
                    <input type="number" placeholder=" enter year (e.g. 2009)" name="year" {...register("year", { required: true })}></input>
                    {errors.year && <span className="error-msg">This field is required</span>}<br />
                    <label htmlFor="month"> What month was that?</label>
                    <input type="text" placeholder=" e.g. February" name="month" {...register("month", { required: true })}></input>
                    {errors.month && <span className="error-msg">This field is required</span>}<br />
                    <label htmlFor="notes">Please briefly describe what happened in event!</label>
                    <input type="text" placeholder=" write your story here..." name="notes" {...register("notes", { required: true })}></input>
                    {errors.notes && <span className="error-msg">This field is required</span>}<br />
                    <label> Do you have an image from that event? </label>
                    <input type="file" accept='image/*' placeholder=' choose your image'></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
  )}

export default SubmitEvent