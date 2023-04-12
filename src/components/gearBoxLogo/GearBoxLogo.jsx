import {Link} from 'react-router-dom'
import classes from './GearBoxLogo.module.css';

function GearBoxLogo() {
	return (
		<Link to='/'>
			<div className={classes.gearbox}>
			<div className={classes.overlay}>
				<h1 className={classes.title}>Admin</h1>
			</div>
				<div className={`${classes.gear} ${classes.one}`}>
					<div className={classes.gearinner}>
						<div className={classes.bar}></div>
						<div className={classes.bar}></div>
						<div className={classes.bar}></div>
					</div>
				</div>
				<div className={`${classes.gear} ${classes.two}`}>
					<div className={classes.gearinner}>
						<div className={classes.bar}></div>
						<div className={classes.bar}></div>
						<div className={classes.bar}></div>
					</div>
				</div>
				<div className={`${classes.gear} ${classes.three}`}>
					<div className={classes.gearinner}>
						<div className={classes.bar}></div>
						<div className={classes.bar}></div>
						<div className={classes.bar}></div>
					</div>
				</div>
				<div className={`${classes.gear} ${classes.four} ${classes.large}`}>
					<div className={classes.gearinner}>
						<div className={classes.bar}></div>
						<div className={classes.bar}></div>
						<div className={classes.bar}></div>
						<div className={classes.bar}></div>
						<div className={classes.bar}></div>
						<div className={classes.bar}></div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default GearBoxLogo;