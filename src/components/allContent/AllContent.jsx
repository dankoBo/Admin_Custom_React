import NavAccordion from '../accordion/NavAccordion'
import { Outlet } from 'react-router-dom'
import GearBoxLogo from '../gearBoxLogo/GearBoxLogo'
import { StyledAppContainer, StyledAppLeftSide, StyledAppRightSide, StyledMainContent } from '../allContent/StyledAllContent';
import Header from '../header/Header';



function AllContent() { 
    console.log('hello');
    return (
        <StyledAppContainer>
            <StyledAppLeftSide>
				<GearBoxLogo/>
                <NavAccordion />
            </StyledAppLeftSide>
            <StyledAppRightSide>
                <Header />
                <StyledMainContent>
					<Outlet/>
                </StyledMainContent>
            </StyledAppRightSide>
        </StyledAppContainer>
    )
}


export default AllContent