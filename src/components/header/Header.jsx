import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { StyledAppBar } from './StyledHeader';


function Header() {
	return (
		<StyledAppBar
			position='relative'
		>
			<Toolbar>
				<Typography
					sx={{ flexGrow: 1 }}
					variant='h5'
				>
					WELCOME
				</Typography>
				<IconButton
					color='inherit'
				>
					<LoginRoundedIcon/>
				</IconButton>
			</Toolbar>
		</StyledAppBar>
	);
}

export default Header;