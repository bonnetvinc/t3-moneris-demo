import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddCardIcon from "@mui/icons-material/AddCard";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import PaidIcon from "@mui/icons-material/Paid";

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  path: string;
}

const menuConfiguration: MenuItem[] = [
  { title: "Home", icon: <HomeIcon />, path: "/" },
  { title: "Ledger", icon: <AccountBalanceIcon />, path: "/ledger" },
  {
    title: "Registered",
    icon: <CardTravelIcon />,
    path: "/registered-accounts",
  },
  {
    title: "Pay Now",
    icon: <PaidIcon />,
    path: "/pay",
  },
  {
    title: "Pay With Card",
    icon: <AddCardIcon />,
    path: "/pay-card",
  },
];

const MenuItems = () => (
  <div>
    <Toolbar />
    <Divider />
    <List>
      {menuConfiguration.map((item, index) => (
        <ListItem key={item.title} disablePadding>
          <ListItemButton href={item.path}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
  </div>
);

export default MenuItems;
