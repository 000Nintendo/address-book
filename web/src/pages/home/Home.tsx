import { Box, Button } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import LayoutContainer from "../../components/layout/LayoutContainer";
import AddAddressModal from "../../components/modals/AddAddressModal";
import { addressActions } from "../../redux/features/addresse";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addAddressContainer: {},
  })
);

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const openAddUpdateAddressModal = () => {
    dispatch(
      addressActions.setAddUpdateAddressModal({
        isOpen: true,
      })
    );
  };

  return (
    <Box>
      <AddAddressModal />
      <LayoutContainer>
        <Box className={classes.addAddressContainer} mt={3}>
          <Button
            color="primary"
            variant="contained"
            onClick={openAddUpdateAddressModal}
          >
            Add new address
          </Button>
        </Box>
      </LayoutContainer>
    </Box>
  );
};

export default Home;
