import Box from '@mui/material/Box';
import { StyledDataGrid } from './StyledContentTable';



function ContentTable({tableData}) {
    const keys = Object.keys(tableData[0] || {})
    const bannedKeys = ['id', 'address', 'website', 'company', 'userId']
    const newKeys = keys.filter(key => !bannedKeys.includes(key))
    
    let myId = {field: 'id', headerName: 'id', width: 60}
    const columns = newKeys.map(key => {
        return Object.assign( { field: key, headerName: key, editable: true, flex: 1 } )
    })
    const myColumn = [myId, ...columns]

    return (
        <Box sx={{ height: 578, width: '100%'}}>
            <StyledDataGrid
                disableColumnMenu
                rows={tableData}
                columns={myColumn}
                hideFooterPagination
                hideFooterSelectedRowCount
                hideFooter
            />
        </Box>
    );
}

export default ContentTable