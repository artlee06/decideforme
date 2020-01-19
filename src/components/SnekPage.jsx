import React, { useState } from "react";
import './Errormsg.css';
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
import { grey } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { withStyles, makeStyles} from "@material-ui/core/styles";

export default function SnekPage() {
  let history = useHistory();

  //States
  const [snekPage, setPage] = useState({
    question: "",
    type: "",
    answers: []
  });

  const [errors, setErrors] = useState({
      question: "",
      type: "",
  });

  //Destructuring
  const { question, type, answers } = snekPage;

  //handlers
  const handleSubmit = () => {
      const errors = validateAll(); //returns errors as well as the JSON object
      if (!hasErrors(errors)) {
        //   const getAnswers = randomiser(answers);
        //   setPage({...regularPage, answers: getAnswers});
      }
  };

  const handleSnek = () => {
    console.log("you have been sneked")
};


  //Validation
  const hasErrorQn = errors.question !== "";
  const hasErrorQn2 = errors.type !== "";
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
    setPage({...snekPage, type: event.target.value});
  };

  // button
  const ColorButton = withStyles(theme => ({
    root: { 
      color: grey[50],
      backgroundColor: grey[50],
      "&:hover": {
        backgroundColor: grey[50]
      }
    }
  }))(Button);
  
  const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(50)
    }
  }));
  
  const classes = useStyles();


  return (
    <React.Fragment>
      <div>
        <Paper elevation={0} square>
          <Box>
            <Typography variant="h2">
                Snek Mode
            </Typography>
            <TextField
                variant="outlined"
                autoFocus
                error={hasErrorQn}
                label="Question"
                helperText={hasErrorQn ? "Please Fill Up this field" : ""}
                onChange={(event) => setPage({...snekPage, question: event.target.value})}
                value={question}
            />
          </Box>
          <RadioGroup aria-label="type" name="type1" value={type} onChange={handleChange}>
            <FormControlLabel control={<Radio value="yN" />} label="Yes/No" />
            <FormControlLabel control={<Radio value="mC" />} label="Open ended" />
          </RadioGroup>
          {hasErrorQn2 && 
            <div class="errormsg"> Error: wHAT iS uR quEstIon </div>
          }
          <Button onClick={handleSubmit}> DECIDE FOR ME </Button>
        </Paper>

      </div>
      <ColorButton
        size="small"
        variant="contained"
        color="primary"
        onClick={handleSnek}
        className={classes.margin}
      >
        SnekSnek
      </ColorButton>
    </React.Fragment>
  );
}

