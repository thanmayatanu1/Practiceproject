import React, {useState, useRef} from 'react';
import Card from '../UI/Card';
import classes from './AddUse.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModule';
import Wrapper from '../Helpers/Wrapper';


const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegenameInputRef = useRef();


 const [error, setError] = useState();

    const AddUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        const enteredCollegeName = collegenameInputRef.current.value;

        if(enteredCollegeName.trim().length === 0 || enteredUserAge.trim().length ===0 || enteredName.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name, collegename and age (non-empty values).'

            });
            return; 
        }


        
        if(+enteredUserAge < 1) {
            setError({
                title:'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;

        }
        

        props.onAddUser(enteredName, enteredUserAge, enteredCollegeName);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collegenameInputRef.current.value = '';
      
       

    };

    

      const errorHandler = () => {
        setError(null);
      };

    return (
        <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={classes.input}>
    <form onSubmit={AddUserHandler}>
        <label htmlFor='username' >UserName:</label>
        <input type="text" username="username" id="username"  ref={nameInputRef} ></input>
        <label htmlFor='age'>Age(Years):</label>
        <input type="number" username="age" id="age"   ref={ageInputRef} ></input>
        <label htmlFor='collegename'>College Name:</label>
        <input type="text" username="collegename" id="collegename"   ref={collegenameInputRef} ></input>

        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </Wrapper>
    );

};

export default AddUser;