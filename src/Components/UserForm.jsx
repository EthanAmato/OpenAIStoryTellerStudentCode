
import { useState } from 'react';
import '../Styles/UserForm.css'
import generatePrompt from '../Helper/generatePrompt';

function UserForm({fetchStory}) {
    //REQUIRED:
    // Firstname
    // Occupation
    // Fun fact
    // Genre
    //Optional:
    //Famous author

    const [formData, setFormData] = useState({
        firstName: '',
        occupation: '',
        funFact: '',
        genre: '',
        famousAuthor: ''
    })

    const [errors, setErrors] = useState({})


    function handleSubmit(e) {
        e.preventDefault();

        const formErrors = {};
        
        if(!formData.firstName) formErrors.firstName = 'First name is required!';
        if(!formData.occupation) formErrors.occupation = 'Occupation is required!';
        if(!formData.funFact) formErrors.funFact = 'Fun fact is required!';
        if(!formData.genre) formErrors.genre = 'Genre is required!';

        console.log(formErrors)
        if(Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
        } else {
            fetchStory(generatePrompt(formData))
        }
        
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
        setErrors({...errors, [name]:''})
    }
    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <div className='error'>{errors.firstName}</div>}

            <label htmlFor="occupation">Occupation:</label>
            <input type="text" name="occupation" value={formData.occupation} onChange={handleChange}/>
            {errors.occupation && <div className='error'>{errors.occupation}</div>}



            <label htmlFor="funFact">Fun Fact:</label>
            <input type="text" name="funFact" value={formData.funFact} onChange={handleChange}/>
            {errors.funFact && <div className='error'>{errors.funFact}</div>}

            <label htmlFor="genre">Genre:</label>
            <select name="genre" value={formData.genre} onChange={handleChange}>
                <option value={""}>Select a genre</option>
                <option value={"sci-fi"}>Science Fiction</option>
                <option value={"fantasy"}>Fantasy</option>
                <option value={"mystery"}>Mystery</option>
                <option value={"romance"}>Romance</option>
                <option value={"horror"}>Horror</option>
            </select>
            {errors.genre && <div className='error'>{errors.genre}</div>}

            <label htmlFor="famousAuthor">Famous Author (Optional):</label>
            <input type="text" name="famousAuthor" value={formData.famousAuthor} onChange={handleChange}/>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default UserForm