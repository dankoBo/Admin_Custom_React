import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { StyledCard, StyledCardContainer } from './StyledPhotoContent';

function PhotoTable({tableData}) {
    return (
        <StyledCardContainer>
            {
                tableData.map(photo => 
                    <StyledCard key={photo.id}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={photo.url}
                                alt={photo.thumbnailUrl}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {photo.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </StyledCard>
                )
            }
            
        </StyledCardContainer>
    );
}

export default PhotoTable