import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom'
import { MyAccordion, MyDiv, StyledLynkWrapper} from './StyledNavAccordion'

function NavAccordion() {
    const setActiveLink = ({isActive}) => isActive ? 'active-link' : ''
    return (
		<MyDiv>
			<MyAccordion>
				<AccordionSummary
						expandIcon={<ExpandMoreIcon style={{color: '#F05316'}} />}
					>
					<Typography>Navigation</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<StyledLynkWrapper>
						<NavLink to="users" className={setActiveLink}>Users</NavLink>
					</StyledLynkWrapper>
					<StyledLynkWrapper>
						<NavLink to="posts" className={setActiveLink}>Posts</NavLink>
					</StyledLynkWrapper>
					<StyledLynkWrapper>
						<NavLink to="photos" className={setActiveLink}>Photos</NavLink>
					</StyledLynkWrapper>
				</AccordionDetails>
			</MyAccordion>
		</MyDiv>
    );
}

export default NavAccordion