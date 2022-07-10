import { Box, Button, TextField } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import React from "react";
import LayoutContainer from "../../components/layout/LayoutContainer";
import AddAddressModal from "../../components/modals/AddAddressModal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addAddressContainer: {},
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <Box>
      <AddAddressModal />
      <LayoutContainer>
        <Box className={classes.addAddressContainer} mt={3}>
          <Button color="primary" variant="contained">
            Add new address
          </Button>
        </Box>
      </LayoutContainer>
    </Box>
  );
};

export default Home;
