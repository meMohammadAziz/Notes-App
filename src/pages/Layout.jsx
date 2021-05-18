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

const drawerWidth = 241;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(3),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
      background: "#fff",
      color: "#000",
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary"></SubjectOutlined>,
      path: "/",
    },
    {
      text: "My Notes",
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
        <div>
          <Typography variant="h5" className={classes.title}>
            Mars Notes
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              onClick={() => history.push(item.path)}
              button
              key={item.path}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
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
