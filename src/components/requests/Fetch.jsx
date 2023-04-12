import { useState, useEffect } from 'react'
import ContentTable from '../contentTable/ContentTable'
import PhotoTable from '../photoContent/PhotoTable'
import DataLoader from '../dataLoader/DataLoader'

function Fetch({link}) {
    const [tableData, setTableData] = useState([]);
	const [loading, setLoading] = useState(false);
    
    const handleFetchData = async () => {
		setLoading(true)
        const response = await fetch(link)
        let data = await response.json()
        setTableData(data)
		setLoading(false)
    }

    useEffect(() => {
        handleFetchData()
    }, []);

	return (
		loading ? <DataLoader />
			: link.includes('photos') ? <PhotoTable tableData={tableData}/> : <ContentTable tableData={tableData}/>
	)
}

export default Fetch