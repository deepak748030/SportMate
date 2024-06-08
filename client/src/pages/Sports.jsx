import { Suspense, React } from 'react';
import Layout from '../components/layouts/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from '../components/Spinner';

const imgData = [
    {
        title: 'Athletics',
        description: 'Join our athletics community and stay on top of your game. Plan training sessions, track progress, and connect with fellow athletes effortlessly.',
        imgUrl: 'https://plus.unsplash.com/premium_photo-1673294804485-adc888cbcd86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Basketball',
        description: 'Manage your basketball team with ease. Schedule games, track player stats, and communicate with your team all in one place.',
        imgUrl: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d'
    },
    {
        title: 'Canoeing',
        description: 'Streamline your canoeing adventures. Organize events, share routes, and keep your team informed about training sessions.',
        imgUrl: 'https://images.unsplash.com/photo-1523287281576-5b596107a6ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Cricket',
        description: 'Take your cricket team management to the next level. Schedule practices, manage matches, and stay connected with your team.',
        imgUrl: 'https://images.unsplash.com/photo-1562077772-3bd90403f7f0?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Exercise Class',
        description: 'Simplify your exercise class management. Create schedules, confirm attendance, and handle payments all from your phone.',
        imgUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1'
    },
    {
        title: 'Football',
        description: 'Keep your football team organized. Manage rosters, schedule games, and communicate with players easily and efficiently.',
        imgUrl: 'https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Gymnastics',
        description: 'Make gymnastics team management a breeze. Organize practices, communicate with team members, and track performances.',
        imgUrl: 'https://images.unsplash.com/photo-1583155778358-9da4eb5e0c1d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'HIIT Class',
        description: 'Manage your HIIT classes effortlessly. Schedule sessions, track attendance, and collect payments with ease.',
        imgUrl: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Hiking',
        description: 'Keep your hiking group organized. Share routes, plan hikes, and keep everyone updated with the latest information.',
        imgUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Hockey',
        description: 'Enhance your hockey team management. Schedule practices, manage games, and keep your team connected and informed.',
        imgUrl: 'https://images.unsplash.com/photo-1554539484-e4fab56d4a5c?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Jiu-Jitsu',
        description: 'Organize your Jiu-Jitsu classes efficiently. Schedule events, share updates, and manage memberships all in one place.',
        imgUrl: 'https://images.unsplash.com/photo-1682545888368-587f56efd06e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Judo',
        description: 'Simplify Judo class management. Create schedules, update students, and handle memberships easily and effectively.',
        imgUrl: 'https://images.unsplash.com/photo-1515025617920-e1e674b5033c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Karate',
        description: 'Manage your karate classes seamlessly. Plan events, share news, and handle payments with a few clicks.',
        imgUrl: 'https://plus.unsplash.com/premium_photo-1683120902370-0431903fb8b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Mixed Martial Arts (MMA)',
        description: 'Take control of your MMA team management. Schedule training sessions, share fight updates, and collect fees online.',
        imgUrl: 'https://images.unsplash.com/photo-1602827114685-efbb2717da9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

function Sports() {
    return (
        <Layout title="SPORTMATE - SPORTS">
            <div className="container text-center p-4">
                <h2 className="fw-bold">SPORTS</h2>
                <p className="fs-5 fs-md-4">Sportmate is your ultimate solution for managing sports teams and activities. Organize events, track progress, and stay connected effortlessly.</p>
            </div>

            <div className="container">
                <div className="row">
                    {imgData.map((data, index) => (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="card mx-auto bg-light shadow-sm" style={{ maxWidth: '400px', height: '100%' }}>
                                <Suspense fallback={<Spinner />}>
                                    <img src={data.imgUrl} className="card-img-top" alt={data.title} style={{ height: '200px', objectFit: 'cover' }} />

                                </Suspense>

                                <div className="card-body text-center">
                                    <h3 className="card-title fw-bold text-primary" style={{ opacity: '.8' }}>{data.title}</h3>
                                    <p className="card-text">{data.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Sports;
