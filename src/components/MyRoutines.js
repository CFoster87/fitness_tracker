import * as React from 'react';
import { useState } from 'react';
import { MyRoutines } from '../api/index';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';


function MyRoutines(props) {
   const [token, setModifyRoutine] = [
      props.token,
      props.setModifyRoutine,
   ];
   const [name, setName] = useState('');
   const [goal, setGoal] = useState('');
   const [isPublic, setIsPublic] = useState(false);
   const [message, setMessage] = useState('');

   async function handleSubmit(e) {
      e.preventDefault();
      setModifyRoutine(true);
      const result = await MyRoutines(name, goal, isPublic, token);
      if (
         result.message ===
         'duplicate key value'
      ) {
         setMessage(`A routine with the name ${name} already exists`);
      } else {
         if (result.message) {
            setMessage(result.message);
         } else {
            setMessage('New Routine Added');
            setName('');
            setGoal('');
            setIsPublic(false);
            setModifyRoutine(false);
         }
      }
   }

   return (
      <>
         <Box component='form' onSubmit={handleSubmit}>
            <TextField
               margin='normal'
               fullWidth
               id='outlined'
               label='Name'
               value={name}
               onChange={(e) => setName(e.target.value)}></TextField>
            <TextField
               margin='normal'
               fullWidth
               id='outlined'
               label='Goal'
               value={goal}
               onChange={(e) => setGoal(e.target.value)}></TextField>
            <Button
               variant='contained'
               type='submit'
               margin='normal'
               aria-label='send'>
               Send
            </Button>
         </Box>
         
      </>
   );
}

export default MyRoutines;
