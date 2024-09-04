import { Box, CircularProgress, Typography } from "@mui/material";

function SimpleLoading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <CircularProgress size={50} sx={{ mb: 2 }} />{" "}
      <Typography component="span" sx={{ fontSize: "1.2rem" }}>
        Loading...
      </Typography>
    </Box>
  );
}

export default SimpleLoading;
