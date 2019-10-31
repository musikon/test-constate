import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { Submit } from "../";

const chatList = [
	{ id: 1, message: 'Hello', owner: true, name: 'Y' },
	{ id: 2, message: 'Hello!', owner: false, name: 'M' },
	{ id: 3, message: 'How are you?', owner: true, name: 'Y' },
	{ id: 4, message: 'Im fine, and you', owner: false, name: 'M' },
	{ id: 5, message: 'im fine too, thanks', owner: true, name: 'Y' },
	{ id: 6, message: 'good by', owner: false, name: 'M' },
];

const useStyles = makeStyles(theme => ({
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		paddingLeft: 540,
		position: 'relative',
	},
	toolbar: theme.mixins.toolbar,
	owner: {
		marginBottom: 10,
		display: 'flex',
		justifyContent: 'flex-start'
	},
	user: {
		marginBottom: 10,
		display: 'flex',
		justifyContent: 'flex-end'
	},
	chat: {}
}));

const ViewChat = () => {
	const classes = useStyles();
	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<div className={classes.chat}>
				{
					chatList.map(item => (
						<div key={item.id} className={classes[item.owner ? 'owner' : 'user']}>
							<Chip avatar={<Avatar>{item.name}</Avatar>} label={item.message} />
						</div>
					))
				}
			</div>
			<Submit />
		</main>
	);
};

export default ViewChat
