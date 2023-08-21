import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Badge, Box, IconButton } from "@mui/material";
import { HeaderProps } from "../../core/interfaces";
import PrimarySearchAppBar from "../searchbar/searchbar.component";
import styles from "./header.module.scss";

const HeaderComponent = ({ title, links }: HeaderProps) => {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.toolbar}>
        <a href='/'>
          <img src='/assets/images/logoWebsite.png' className="logoDesktop" alt=""  width="168" height="59"/>  
        </a>
        
        <PrimarySearchAppBar></PrimarySearchAppBar>

        <Box className='' sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
              <ShoppingBagIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <ShoppingBagIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <ShoppingBagIcon />
            </IconButton>
          </Box>
      </div>
    </div>
  );
};

export default HeaderComponent;
