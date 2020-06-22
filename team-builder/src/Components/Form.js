import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: 800,
    margin: "20px auto"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    width: 200
  },
  FabButton: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1)
  }
}));

const Form = props => {
  const [member, setMember] = useState(
    props.member || { name: "", email: "", role: "" }
  );

  const classes = useStyles();

  function handleChange(e) {
    e.persist();
    setMember(values => {
      return {
        ...values,
        [e.target.name]: e.target.value
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.member ? props.editMember(member) : props.addMember(member);
    setMember({ name: "", email: "", role: "" });
  }

  return (
    <Card className={classes.container}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Name"
          name="name"
          value={member.name}
          onChange={handleChange}
          margin="normal"
          className={classes.textField}
        />
        <TextField
          id="email"
          label="E-Mail"
          name="email"
          value={member.email}
          onChange={handleChange}
          margin="normal"
          className={classes.textField}
        />
        <TextField
          id="role"
          label="Role"
          name="role"
          value={member.role}
          onChange={handleChange}
          margin="normal"
          className={classes.textField}
        />
        {props.member ? (
          <Fab
            className={classes.FabButton}
            type="submit"
            color="primary"
            aria-label="edit"
          >
            <EditIcon />
          </Fab>
        ) : (
          <Fab
            className={classes.FabButton}
            type="submit"
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        )}
      </form>
    </Card>
  );
};

export default Form;
