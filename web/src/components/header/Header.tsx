import { Translate } from "@mui/icons-material";
import AdbIcon from "@mui/icons-material/Adb";
import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

import React, { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    translateIcon: {
      color: theme.palette.background.default,
    },
  })
);

const langulages = [
  {
    label: "En",
    value: "en",
  },
  {
    label: "Hi",
    value: "hi",
  },
];

const Header = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    languageAnchor: null,
  });

  const openLanguageMenu = ({ event }: { event: any }) => {
    if (event) {
      setState({
        languageAnchor: event.currentTarget,
      });
      return;
    }

    setState({
      languageAnchor: null,
    });
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid item sx={{ display: "flex", alignItems: "center" }}>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                Address Book
              </Typography>
            </Grid>

            <Grid item>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Change language">
                  <IconButton
                    onClick={(event) => {
                      openLanguageMenu({ event });
                    }}
                    sx={{ p: 0 }}
                  >
                    <Translate className={classes.translateIcon} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={state.languageAnchor}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(state.languageAnchor)}
                  onClose={() => openLanguageMenu({ event: null })}
                >
                  {langulages.map((lang) => (
                    <MenuItem
                      key={lang.value}
                      onClick={() => openLanguageMenu({ event: null })}
                    >
                      <Typography textAlign="center">{lang.label}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Grid>
          </Grid>

          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
