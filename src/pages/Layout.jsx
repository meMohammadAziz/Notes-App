import {
  Drawer,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  AppBar,
  Toolbar,
  Avatar,
} from "@material-ui/core";
import { AddCircleOutlineRounded, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const drawerWidth = 100;

const useStyles = makeStyles((theme) => {
  return {
    ListCon: { textAlign: "center" },
    page: {
      background: "rgb(221,221,221)",
      background:
        " linear-gradient(90deg, rgba(221,221,221,1) 0%, rgba(226,231,232,1) 39%, rgba(167,211,221,1) 100%)",
      width: "100%",
      padding: theme.spacing(3),
      height: "100%",
    },
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
      background:
        "linear-gradient(250deg, rgba(225,211,195,1) 0%, rgba(226,231,232,1) 30%, rgba(167,211,221,1) 100%)",
      boxShadow:
        "12px 12px 16px 0 rgba(255, 255, 255, 0.3) ,-8px -8px 12px 0 rgba(0, 0, 0, .25)",
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: "20px 0",
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
      background: "#fff",
      color: "#000",
      borderBottom: "1px solid lightblue",
      boxShadow:
        "12px 12px 16px 0 rgba(0, 0, 0, 0.1),-8px -8px 12px 0 rgba(255, 255, 255, 0.3)",
      background:
        "linear-gradient(90deg, rgba(221,221,221,1) 0%, rgba(226,231,232,1) 39%, rgba(167,211,221,1) 100%)",
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
      transition: "transform 100ms",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    icon: {
      transition: "transform 100ms",
      "&:hover": {
        transform: "scale(1.3)",
      },
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "",
      icon: <SubjectOutlined color="secondary"></SubjectOutlined>,
      path: "/",
    },
    {
      text: "",
      icon: (
        <AddCircleOutlineRounded color="secondary"></AddCircleOutlineRounded>
      ),
      path: "/create",
    },
  ];

  const dateGetter = () => {
    const date = new Date();
    const months = [
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[date.getMonth()];

    return `Today is the ${date.getDate()}th ${month} ${date.getFullYear()}`;
  };
  return (
    <div className={classes.root}>
      <AppBar elevation={0} className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.date}>{dateGetter()}</Typography>
          <Typography>Mohammad</Typography>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div className={classes.ListCon}>
          <Typography variant="h5" className={classes.title}>
            Mars Notes
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px 0",
              }}
              onClick={() => history.push(item.path)}
              button
              key={item.path}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon className={classes.icon} style={{ minWidth: 0 }}>
                {item.icon}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
