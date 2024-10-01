

import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" component={Link} to="/">
                    Nueva Solicitud
                </Button>
                <Button color="inherit" component={Link} to="/lista">
                    Lista
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
