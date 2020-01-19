import React, { useState } from "react";
import './Errormsg.css';
// Material UI
// import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import AnswerField from './AnswerField';

//helpers
import randomIndex from "../helpers/Randomiser";
import { useHistory } from "react-router-dom";
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
          let getAnswer = 0;
          if (type === "yN") {
              getAnswer = randomIndex(["Yes", "No"]);
          } else {
            getAnswer = randomIndex(answers);
          }
          history.push("/Answer", {value: getAnswer, question: question});
      }
  };

  //Validation
  const hasErrorQn = errors.question !== "";
  const hasErrorQn2 = errors.type !== "";
  const showOpenEnded = type === "mC";
  const validateAll = () => {
    const errorObj = {
        question: "",
        type: "",
    };
    errorObj.question = question === "" ? "Question me senpai" : "";
    errorObj.type = type === "" ? " What kind of question la" : "";
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
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography variant="h2">
                Regular Mode
            </Typography>
            <TextField
                variant="outlined"
                autoFocus
                error={hasErrorQn}
                label="Question"
                helperText={hasErrorQn ? errors.question : ""}
                onChange={(event) => setPage({...regularPage, question: event.target.value})}
                value={question}
            />
            <RadioGroup aria-label="type" name="type1" value={type} onChange={handleChange}>
                <FormControlLabel control={<Radio value="yN" />} label="Yes/No" />
                <FormControlLabel control={<Radio value="mC" />} label="Open ended" />
            </RadioGroup>
            {hasErrorQn2 && 
                <div class="errormsg"> Error: wHAT iS uR quEstIon </div>
            }
            {showOpenEnded && <AnswerField values={answers} setArr={(newArr) => setPage({...regularPage, answers: newArr})} />}
          </Box>
          <Button onClick={handleSubmit}> DECIDE FOR ME </Button>
        </Paper>
      </div>
    </React.Fragment>
  );
};

  


