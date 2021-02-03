import React, { useState } from "react";
import useStyles from "./FormStyle";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    author: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6"> Create your post</Typography>
        <TextField
          name="author"
          variant="outlined"
          label="Author"
          fullWidth
          value={postData.author}
          onChange={(e) => setPostData({ ...postData, author: e.target.value })}
        />

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <TextField
          name="message"
          variant="outlined"
          label="Write a caption"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />

        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        {/* ----------------- converting file image to string using base64 */}
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          PixShare{" "}
          <i
            class="fa fa-check"
            aria-hidden="true"
            style={{ height: "1rem", marginLeft: "0.5rem" }}
          ></i>
        </Button>
        {/* button to clear form */}
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear{" "}
          <i
            class="fa fa-trash-o"
            aria-hidden="true"
            style={{ marginLeft: "0.5rem" }}
          ></i>
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
