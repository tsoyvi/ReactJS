import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';


function MessagesList(props) {
    const dispatch = useDispatch();

    return (
        <div>

            {props.messList.map((item) =>
                <div key={item.id}>

                    <Card sx={{ minWidth: 275, m: 2 }}>
                        <CardContent>
                            <Typography variant="body2">
                                {item.text}
                            </Typography>

                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {item.author}
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {item.date}
                            </Typography>


                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => dispatch({ type: 'delMessage', index: props.index, idMessage: 1 })}
                            >Удалить</Button>
                        </CardActions>
                    </Card>

                </div>
            )}
        </div>
    );
}

export default MessagesList;
