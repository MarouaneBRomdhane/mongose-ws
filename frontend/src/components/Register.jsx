import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { Createuser } from "../redux/Action";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Register() {
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [gender, setgender] = useState("");
  const [image, setimage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); // allows modifications inside the inputs
    const data = { name, age, image, gender };
    console.log(data);
    dispatch(Createuser(data));
    navigate("/home");
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
          const MAX_WIDTH = 800; // Set your desired maximum width
          const MAX_HEIGHT = 600; // Set your desired maximum height

          let width = img.width;
          let height = img.height;

          // Check if the image needs to be resized
          if (width > MAX_WIDTH || height > MAX_HEIGHT) {
            const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height);

            // Resize the image maintaining aspect ratio
            width *= ratio;
            height *= ratio;
          }

          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          // Set the canvas dimensions to the resized image dimensions
          canvas.width = width;
          canvas.height = height;

          // Draw the resized image onto the canvas
          ctx.drawImage(img, 0, 0, width, height);

          // Convert the canvas content to a data URI with compression (adjust quality as needed)
          const dataUri = canvas.toDataURL("image/jpeg", 0.8);

          setimage(dataUri);
          console.log(dataUri);
        };
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setname(e.target.value)}
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setgender(e.target.value)}
                  name="gender"
                  required
                  fullWidth
                  id="gender"
                  label="Gender"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <label htmlFor="imageInput">Choose Profile Image:</label>
                <TextField
                  required
                  onChange={(event) => handleImageChange(event)}
                  fullWidth
                  type="file"
                  id="imageInput"
                  accept="image/*"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => setage(e.target.value)}
                  name="age"
                  label="Age"
                  type="number"
                  id="age"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
