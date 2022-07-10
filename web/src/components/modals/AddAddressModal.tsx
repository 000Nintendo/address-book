import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routeConstants } from "../../constants/constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progressBar: {
      "& svg": {
        color: theme.palette.background.default,
      },
    },
  })
);

const AddAddressModal = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const classes = useStyles();
  const [state, setState] = useState({
    isModalOpen: false,
  });

  useEffect(() => {
    const pathname = window.location.href;
    if (
      pathname.includes(routeConstants.addAddress) ||
      pathname.includes(routeConstants.updateAddress)
    ) {
      setState({
        isModalOpen: true,
      });
      return;
    }

    setState({
      isModalOpen: false,
    });
    return;
  }, location.pathname);


  const handleCloseModal = () => {
    window.history.back();
  }

  return (
    <Dialog open={state.isModalOpen} maxWidth="md" fullWidth onClose={() => handleCloseModal()}>
      <DialogTitle>Add address</DialogTitle>
      <DialogContent sx={{}}>
        <Box>
          <TextField
            id="filled-multiline-static"
            label="Full name"
            type="text"
            variant="filled"
            fullWidth
          />
        </Box>
        <br />

        <Box>
          <TextField
            id="filled-multiline-static"
            label="Mobile"
            type="text"
            variant="filled"
            fullWidth
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "start", padding: "20px 24px" }}>
        <Button
          color="primary"
          variant="contained"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
          }}
        >
          <Box sx={{ position: "relative", marginRight: 2 }}>
            <CircularProgress size="20px" className={classes.progressBar} />
          </Box>

          <Typography>Add address</Typography>
        </Button>

        <Button variant="outlined" onClick={handleCloseModal}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddAddressModal;
