import React from 'react';
import Layout from '../components/layouts/Layout';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box, Avatar, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';
import 'animate.css/animate.min.css';

const UserCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    margin: 'auto',
    marginBottom: theme.spacing(4),
    '& .avatar': {
        width: 100,
        height: 100,
        marginRight: theme.spacing(2),
    },
}));

const EventCard = styled(Card)(({ theme }) => ({
    height: '100%',
}));

const EventBanner = styled(CardMedia)(({ theme }) => ({
    height: 140,
}));

const userData = [
    {
        avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
        name: 'Robert Wolfkisser',
        job: 'Engineer',
        email: 'rob_wolf@gmail.com',
        phone: '+44 (452) 886 09 12',
    }
];

const eventData = [
    {
        id: 6,
        event: 'Volleyball Match',
        date: '2023-06-01',
        time: '10:00 AM',
        location: 'Stadium',
        fee: '100$',
        slots: 24,
        availableSlots: 18,
        hostedBy: 'Robert TukKuk',
        banner: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d'
    },
    {
        id: 5,
        event: 'Volleyball Game',
        date: '2023-06-02',
        time: '12:00 PM',
        location: 'Arena',
        fee: '50$',
        slots: 30,
        availableSlots: 25,
        hostedBy: 'Jane Doe',
        banner: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d'
    },
    {
        id: 1,
        event: 'Volleyball Match',
        date: '2023-06-01',
        time: '10:00 AM',
        location: 'Stadium',
        fee: '100$',
        slots: 24,
        availableSlots: 18,
        hostedBy: 'Robert TukKuk',
        banner: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d'
    },
    {
        id: 2,
        event: 'Volleyball Game',
        date: '2023-06-02',
        time: '12:00 PM',
        location: 'Arena',
        fee: '50$',
        slots: 30,
        availableSlots: 25,
        hostedBy: 'Jane Doe',
        banner: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d'
    },
    {
        id: 3,
        event: 'Volleyball Match',
        date: '2023-06-01',
        time: '10:00 AM',
        location: 'Stadium',
        fee: '100$',
        slots: 24,
        availableSlots: 18,
        hostedBy: 'Robert TukKuk',
        banner: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d'
    },
    {
        id: 4,
        event: 'Volleyball Game',
        date: '2023-06-02',
        time: '12:00 PM',
        location: 'Arena',
        fee: '50$',
        slots: 30,
        availableSlots: 25,
        hostedBy: 'Jane Doe',
        banner: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d'
    },
    // Add more event data objects as needed
];

const renderUserCard = () => (
    <UserCard className="animate__animated animate__fadeIn">
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={userData[0].avatar} alt="User Avatar" className="avatar" />
            <Box>
                <Typography variant="h5">{userData[0].name}</Typography>
                <Typography variant="body2" color="textSecondary">Job: {userData[0].job}</Typography>
                <Typography variant="body2" color="textSecondary">Email: {userData[0].email}</Typography>
                <Typography variant="body2" color="textSecondary">Phone: {userData[0].phone}</Typography>
            </Box>
        </CardContent>
    </UserCard>
);

const renderSportsEvents = () => (
    <Grid container spacing={4}>
        {eventData.map(event => (
            <Grid item xs={12} md={6} key={event.id} className="animate__animated animate__fadeInUp">
                <EventCard>
                    <EventBanner
                        component="img"
                        image={event.banner}
                        alt={`${event.event} banner`}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {event.event}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Date: {event.date}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Time: {event.time}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Location: {event.location}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Fee: {event.fee}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Hosted By: {event.hostedBy}
                        </Typography>
                        <Box sx={{ width: '100%', mt: 2 }}>
                            <LinearProgress variant="determinate" value={(event.availableSlots / event.slots) * 100} />
                            <Typography variant="body2" color="textSecondary">
                                {event.availableSlots} / {event.slots} slots available
                            </Typography>
                        </Box>
                        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                            Join Tournament
                        </Button>
                    </CardContent>
                </EventCard>
            </Grid>
        ))}
    </Grid>
);

function UserDash() {
    return (
        <Layout title='DASHBOARD'>
            <div className='container' >
                <Box sx={{ mt: 4 }}>
                    {renderUserCard()}
                    {renderSportsEvents()}
                </Box>
            </div>
        </Layout>
    );
}

export default UserDash;
