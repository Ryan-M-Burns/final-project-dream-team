import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import './NavCard.scss';

const NavCard = ({ link, pageName }) => {
  return (
    <Link className='nav__card' to={link}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src="images/banana.png"
            alt="Banana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pageName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
export default NavCard;