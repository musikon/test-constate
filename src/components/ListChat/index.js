import React from 'react'

import { useAdminContext } from '../../state'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const drawerWidth = 500;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	toolbar: theme.mixins.toolbar,
}));

const ListChat = () => {
	const classes = useStyles();
	const {
		valueTab,
		listChat,
		actions: { handleChangeTab }
	} = useAdminContext();

	const chatView = listChat[valueTab];
	return (
		<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<div className={classes.toolbar} />
			<Tabs
				value={valueTab}
				indicatorColor="primary"
				textColor="primary"
				aria-label="tabs"
				variant="fullWidth"
				onChange={handleChangeTab}
			>
				<Tab label="Фермеры" />
				<Tab label="Дистрибьютеры" />
			</Tabs>
			<List>
				{chatView.map(item => (
					<ListItem button key={item.id}>
						<ListItemText primary={item.text} />
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default ListChat
