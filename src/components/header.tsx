import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react"

const Header = () => {
    const settings = ['Profile','Logout'];
    const router = useRouter()

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = (setting:string) => {
        if(setting === 'Logout'){
            sessionStorage.clear();
            router.push("/login")
        }
        setAnchorElUser(null);
    };
    return (
        <div className="header-2 fixed  w-full border z-50">
            <nav className="bg-white py-2 md:py-4">
                <div className="container px-4 mx-auto md:flex md:items-center md:justify-between">

                    <div className="flex justify-between items-center">
                        <Link href="#" className="font-bold text-2xl text-indigo-600">LOGO</Link>
                        <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={()=>handleCloseUserMenu("")}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={()=>handleCloseUserMenu(setting)}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </div>
            </nav>
        </div>
    )
};

export default Header;
