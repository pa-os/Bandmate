import { AppBar, Container, Toolbar } from "@mui/material";
import ProductLogo from "../atoms/ProductLogo";

export default function AppMenuBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <ProductLogo />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
