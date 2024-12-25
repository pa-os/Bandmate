import { Box, Container, Typography } from "@mui/material";
import AppMenuBar from "../organisms/AppMenuBar";

export default function HomePage() {
  return (
    <Box
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <AppMenuBar />
      <Container
        sx={{
          flex: 1,
          bgcolor: "darkgrey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography>Hello there!</Typography>
      </Container>
    </Box>
  );
}