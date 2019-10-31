import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
/*import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';*/
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useAdminContext } from '../../state'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
}));

const Header = () => {
	const classes = useStyles();
	const { actions: { logOut } } = useAdminContext();
	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				{/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
					<MenuIcon/>
				</IconButton>*/}
				<Typography variant="h6" className={classes.title}>
					Chats
				</Typography>
				<Button onClick={logOut} color="inherit">Log out</Button>
			</Toolbar>
		</AppBar>
	);
}

export default Header
