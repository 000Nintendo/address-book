import { createStyles, makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import Header from "../header/Header";

interface ILayoutContainer {
  children: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: {
      maxWidth: 1280,
      margin: "auto",
    },
  })
);

const LayoutContainer = ({ children }: ILayoutContainer) => {
  const classes = useStyles();

  return (
    <Box>
      <Header />
      <Box className={classes.contentContainer}>{children}</Box>
    </Box>
  );
};

export default LayoutContainer;
