import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Send from '@material-ui/icons/Send';

const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		position: 'fixed',
		bottom: 0,
		width: 800,
	},
	fab: {
		minWidth: 56,
	},
	textField: {},
}));

const Submit = () => {
	const classes = useStyles();
	return(
		<div className={classes.container}>
			<TextField
				id="standard-multiline-flexible"
				label="Message"
				multiline
				rowsMax="4"
				className={classes.textField}
				margin="normal"
				fullWidth
			/>
			<Fab color="primary" aria-label="add" className={classes.fab}>
				<Send />
			</Fab>
		</div>
	);
};

export default Submit
