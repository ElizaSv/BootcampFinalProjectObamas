import axios from 'axios'
import './SubmitEvent.css'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import {Routes, Route, useNavigate} from 'react-router-dom'

const SubmitEvent = () => {
 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async formData => {
        const convertToBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
        const getURL = async () => {
            try {
                return await convertToBase64(formData.image[0])
            } catch (error) {
                console.error(error)
            }}
                    
        const createdEvent = JSON.stringify(formData);
        const normalObj = JSON.parse(createdEvent)
        normalObj.image = await getURL()
        const resultingEvent = JSON.stringify(normalObj)

        axios
        .post('http://localhost:8000/events/new', resultingEvent, {headers: {'Content-Type': 'application/json'}})
        .then(response => console.log(response.data))
        .catch(error => {console.log(error.data)});
        

        const navigateToFront = ()=> {
            navigate('/')
        }
        
        setTimeout(navigateToFront(), 2000)
       
    
    }

    return (
        <div className='submit-wrapper'>
            <div className='content-top'>
                <h2 className='submit-title'>Do you know something interesting about Obamas couple?</h2>
            </div>
            <div className='content-bottom'>
                <div className='bottom-left'>
                    <h4 className='submit-descr'> If you have met or been in an event with Obama family, please fill in this form and send it to us and we will post it in our timeline! </h4>
                    <FontAwesomeIcon icon={faArrowCircleRight} className="arrow hide" />
                    <img src="https://s.yimg.com/os/creatr-uploaded-images/2020-01/8129d430-393a-11ea-bbfe-64598fa98387" id="form-img"></img>
                </div>
                <div className='bottom-right'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="event">What was the event?</label>
                            <input type="text" placeholder=" e.g. Barack Obama in local charity party" name="event" {...register("event", { required: true })}></input>
                                {errors.event && <span className="error-msg">This field is required!</span>}<br />
                        <label htmlFor="year">When the event took place?</label>
                            <input type="number" placeholder=" enter year (e.g. 2009)" name="year" {...register("year", { required: true })}></input>
                                {errors.year && <span className="error-msg">This field is required!</span>}<br />
                        <label htmlFor="month"> What month was that?</label>
                            <input type="text" placeholder=" e.g. February" name="month" {...register("month", { required: true })}></input>
                                {errors.month && <span className="error-msg">This field is required!</span>}<br />
                        <label htmlFor="notes">Please briefly describe what happened in event!</label>
                            <input type="text" placeholder=" write your story here..." name="notes" {...register("notes", { required: true })}></input>
                                {errors.notes && <span className="error-msg">This field is required!</span>}<br />
                        <label> Do you have an image from that event? </label>
                            <input type="file" accept="image/*" placeholder=' choose your image' name="image" {...register("image")}></input>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
        </div>
  )}

export default SubmitEvent