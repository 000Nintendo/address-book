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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addressActions } from "../../redux/features/addresse";
import { addUpdateAddressModalSelector } from "../../redux/selectors/address";

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
  const dispatch = useDispatch();

  const modalState = useSelector(addUpdateAddressModalSelector);

  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useState({
    isModalOpen: false,
  });

  const handleCloseModal = () => {
    dispatch(addressActions.closeAddUpdateAddressModal({}));
  };

  return (
    <Dialog
      open={modalState.isOpen}
      maxWidth="md"
      fullWidth
      onClose={() => handleCloseModal()}
    >
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

        <Button variant="outlined" onClick={handleCloseModal}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddAddressModal;
