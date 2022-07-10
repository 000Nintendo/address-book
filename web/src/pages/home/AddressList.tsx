import {
  Box,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";
import AddressCard from "./AddressCard";

const addressList = [
  {
    id: "62cae863496abb34c89c80d0",
    name: "John",
    phone: "1234567890",
    updated_at: "1657464931251",
    created_at: "1657464931251",
  },
  {
    id: "62cae86b496abb34c89c80d5",
    name: "John",
    phone: "1234567891",
    updated_at: "1657464939409",
    created_at: "1657464939409",
  },
  {
    id: "62cae935496abb34c89c80db",
    name: "John",
    phone: "7069993460",
    updated_at: "1657465141467",
    created_at: "1657465141467",
  },
  {
    id: "62cae942496abb34c89c80de",
    name: "Praksh kalsariya",
    phone: "7069993461",
    updated_at: "1657465154828",
    created_at: "1657465154828",
  },
  {
    id: "62cae951496abb34c89c80e1",
    name: "Ashvin Solanki",
    phone: "8780607383",
    updated_at: "1657465169947",
    created_at: "1657465169947",
  },
  {
    id: "62cae96a496abb34c89c80e5",
    name: "Anil Solanki",
    phone: "9727714552",
    updated_at: "1657465194109",
    created_at: "1657465194109",
  },
];

const AddressList = () => {
  return (
    <Box mt={2}>
      {addressList?.length === 0 || !addressList?.length ? (
        <Box
          mt={8}
          sx={{ width: "100%", justifyContent: "center", display: "flex" }}
        >
          <Box
            sx={{
              width: "fit-content",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box mb={2} sx={{ display: "flex", justifyContent: "center" }}>
              <img src="/assets/icons/list-icon.png" alt="" />
            </Box>
            <Typography>Your Address Book Is Empty!</Typography>
          </Box>
        </Box>
      ) : (
        <Grid container>
          {addressList.map((address) => (
            <Grid
              item
              key={address.id}
              sm={3}
              sx={{
                padding: 2,
              }}
            >
              <AddressCard address={address} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default AddressList;
