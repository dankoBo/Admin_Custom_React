import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';



export const StyledDataGrid = styled(DataGrid)`
	
	background-color: #202020;

	&.MuiDataGrid-root {
		
	}
	
	.MuiDataGrid-row {
		color: #FFFFFF;
	}
	
	.MuiDataGrid-row:hover {
		background-color: #ff0000;
	}
	
	.MuiDataGrid-columnHeaders {
		background-color: #F05316;
		color: #000000;
	};

	.MuiDataGrid-columnHeaderTitle:first-letter {
		text-transform: uppercase;
	};

	.MuiSvgIcon-root {
		color: #000000;
	};
`