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
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
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

const addAddressValidationSchema = yup.object({
  name: yup.string().required("Full name is required!"),
  phone: yup
    .string()
    .min(10, "Mobile number must be 10 digits long!")
    .required("Mobile number is required!"),
});

const AddAddressModal = () => {
  const dispatch = useDispatch();

  const modalState = useSelector(addUpdateAddressModalSelector);

  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useState({
    isModalOpen: false,
  });

  const handleSubmit = (values) => {};

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    validationSchema: addAddressValidationSchema,
    validateOnBlur: true,
    onSubmit: handleSubmit,
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
      <DialogTitle>{modalState.update ? "Update" : "Add"} address</DialogTitle>

      <form onSubmit={formik.handleSubmit}>
        <DialogContent sx={{}}>
          <Box>
            <TextField
              id="filled-multiline-static"
              name="name"
              label="Full name"
              type="text"
              variant="filled"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.name}
              error={Boolean(formik.touched.name && formik.errors.name)}
              helperText={formik.errors.name}
              onBlur={formik.handleBlur}
            />
          </Box>
          <br />

          <Box>
            <TextField
              name="phone"
              id="filled-multiline-static"
              label="Mobile"
              type="text"
              variant="filled"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.phone}
              error={
                Boolean(formik.touched.phone) && Boolean(formik.errors.phone)
              }
              helperText={Boolean(formik.touched.phone) && formik.errors.phone}
              onBlur={formik.handleBlur}
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "start", padding: "20px 24px" }}>
          <Button
            color="primary"
            variant="contained"
            type="submit"
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

            <Typography>
              {modalState.update ? "Update" : "Add"} address
            </Typography>
          </Button>

          <Button variant="outlined" onClick={handleCloseModal}>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddAddressModal;
