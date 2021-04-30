import Nav from './Nav';

import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from './Event.css';

import { Events } from './Shared/events';







const Event = ({ title, description, img }) => {


    return (

        <div className='event__container'>
            <div className="nav__header">
                <Nav />
            </div>
            <div className="event__title-container">
                <h1>Check out this months events</h1>
            </div>
            <div className='events__list-container'>
                {Events.map(event =>
                    <li className="events__list">
                        <Card className='event__card'>

                            <CardContent className="event__content">
                                <Typography
                                    className='event__title'
                                    color="textSecondary"
                                    gutterBottom
                                >
                                    {event.title}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    <p>{event.description}</p>
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Button
                                    size="small"
                                    style={{ marginTop: -10 }}
                                    className='event__btn'
                                >
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </li>
                )}
            </div>
        </div >
    )
}

export default Event;
