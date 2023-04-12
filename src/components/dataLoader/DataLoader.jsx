import LinearProgress from '@mui/material/LinearProgress';
import { ThemeProvider } from 'styled-components';
import { StyledStack } from './StyledDataLoader';

import { theme } from './StyledDataLoader';


function DataLoader() {
    return (
		<StyledStack spacing={0}>
				<ThemeProvider theme={theme}>
					<LinearProgress color="primary" />
					<LinearProgress color="primary" />
					<LinearProgress color="primary" />
					<LinearProgress color="secondary" />
					<LinearProgress color="secondary" />
					<LinearProgress color="secondary" />
        		</ThemeProvider>
        </StyledStack>
    );
}

export default DataLoader