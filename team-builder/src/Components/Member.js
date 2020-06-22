import React, { useState } from "react";
import Form from "./Form";
import Card from "@material-ui/core/Card";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: 800,
    margin: "20px auto"
  },
  pname: {
    fontSize: "36px",
    margin: "0 0"
  },
  pemail: {
    fontSize: "24px",
    color: "darkslategray",
    margin: "5 0"
  },
  prole: {
    fontSize: "18px",
    color: "lightgrey",
    margin: "5 0"
  },
  leftDiv: {
    marginLeft: "20px"
  },
  rightDiv: {
    marginRight: "20px"
  }
}));

const Member = props => {
  const [member, setMember] = useState(props.member);
  const [isEditing, setIsEditing] = useState(false);
  const classes = useStyles();

  const editMember = memberChange => {
    setMember(memberChange);
    setIsEditing(false);
  };

  const renderMember = () => {
    return (
      <Card className={classes.container}>
        <div className={classes.leftDiv}>
          <p className={classes.pname}>{member.name}</p>
          <p className={classes.pemail}>{member.email}</p>
          <p className={classes.prole}>{member.role}</p>
        </div>
        <div className={classes.rightDiv}>
          <Fab
            onClick={() => setIsEditing(true)}
            color="default"
            aria-label="add"
          >
            <EditIcon />
          </Fab>
        </div>
      </Card>
    );
  };
  return (
    <>
      {!isEditing ? (
        renderMember()
      ) : (
        <Form editMember={editMember} member={member} />
      )}
    </>
  );
};

export default Member;
