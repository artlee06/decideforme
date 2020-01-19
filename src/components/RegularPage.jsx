import React, { useState, useEffect } from "react";

// Material UI
// import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormGroup } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function RegularPage() {
  let history = useHistory();
  
  //States
  const [regularPage, setPage] = useState({
      question: "",
      type: "",
      answers: []
  });

  const [errors, setErrors] = useState({
      question: "",
      type: "",
  });

  //Destructuring
  const { question, type, answers } = regularPage;

  //handlers
  const handleSubmit = () => {
      const errors = validateAll(); //returns errors as well as the JSON object
      if (!hasErrors(errors)) {
        //   const getAnswers = randomiser(answers);
        //   setPage({...regularPage, answers: getAnswers});
      }
  };


  //Validation
  const hasErrorQn = errors.question !== "";
  const validateAll = () => {
    const errorObj = {
        question: "",
        type: "",
    };
    errorObj.question = question === "" ? "Question me senpai" : "";
    setErrors(errorObj);
    return errorObj;
  };
  const hasErrors = (errors) => {
      return !(errors.question === "" && errors.type === "");
  };

  const handleChange = event => {
    setPage({...regularPage, type: event.target.value});
  };


  return (
    <React.Fragment>
      <div>
        <Paper elevation={0} square>
          <Box>
            <Typography variant="h2">
                Regular Mode
            </Typography>
            <TextField
                variant="outlined"
                autoFocus
                error={hasErrorQn}
                label="Question"
                helperText={hasErrorQn ? "Please Fill Up this field" : ""}
                onChange={(event) => setPage({...regularPage, question: event.target.value})}
                value={question}
            />
          </Box>
          <Button onClick={handleSubmit}> DECIDE FOR ME </Button>
          <RadioGroup aria-label="type" name="type1" value={type} onChange={handleChange}>
            <FormControlLabel control={<Radio value="yN" />} label="Yes/No" />
            <FormControlLabel control={<Radio value="mC" />} label="Open ended" />
          </RadioGroup>
        </Paper>
      </div>
    </React.Fragment>
  );
};

  


