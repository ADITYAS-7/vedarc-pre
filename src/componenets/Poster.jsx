import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Poster() {
  return (
    <>
      <Box
        align="center"
        sx={{
          backgroundImage: `url("https://cdn.wallpapersafari.com/2/0/yN87Rz.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          align="center"
          sx={{
            width: { xs: "100%", sm: "70%", md: "60%" },
            p: { xs: 5, sm: 8, md: 15, lg: 15 },
          }}
        >
          <Box sx={{ color: "white" }}>
            <Typography
              variant="h4"
              color="white"
              align="center"
              pb={10}
              fontWeight="700"
            >
              Ved<b style={{ color: "cyan" }}>Arc</b>
            </Typography>
            <Typography
              variant="h5"
              fontWeight="700"
              align="center"
              sx={{ fontSize: { xs: 28, sm: 60 } }}
            >
              Digital <br /> transformation <br />
              through cloud.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              textAlign="center"
              sx={{ mt: 4 }}
            >
              coming soon{" "}
            </Button>
          </Box>{" "}
        </Box>{" "}
      </Box>
    </>
  );
}
