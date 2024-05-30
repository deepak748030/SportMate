import React from 'react';
import Layout from '../components/layouts/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const imgData = [
    {
        title: 'Athletics',
        description: 'Join our athletics community and stay on top of your game. Plan training sessions, track progress, and connect with fellow athletes effortlessly.',
        imgUrl: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d'
    },
    {
        title: 'Basketball',
        description: 'Manage your basketball team with ease. Schedule games, track player stats, and communicate with your team all in one place.',
        imgUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b'
    },
    {
        title: 'Canoeing',
        description: 'Streamline your canoeing adventures. Organize events, share routes, and keep your team informed about training sessions.',
        imgUrl: 'https://images.unsplash.com/photo-1579679568943-1f67382ccdf4'
    },
    {
        title: 'Cricket',
        description: 'Take your cricket team management to the next level. Schedule practices, manage matches, and stay connected with your team.',
        imgUrl: 'https://images.unsplash.com/photo-1531379410505-63bfe8cd7e84'
    },
    {
        title: 'Exercise Class',
        description: 'Simplify your exercise class management. Create schedules, confirm attendance, and handle payments all from your phone.',
        imgUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1'
    },
    {
        title: 'Football',
        description: 'Keep your football team organized. Manage rosters, schedule games, and communicate with players easily and efficiently.',
        imgUrl: 'https://images.unsplash.com/photo-1513097844810-1f9b8fd097b8'
    },
    {
        title: 'Gymnastics',
        description: 'Make gymnastics team management a breeze. Organize practices, communicate with team members, and track performances.',
        imgUrl: 'https://images.unsplash.com/photo-1519074002996-a69e7ac46a42'
    },
    {
        title: 'HIIT Class',
        description: 'Manage your HIIT classes effortlessly. Schedule sessions, track attendance, and collect payments with ease.',
        imgUrl: 'https://images.unsplash.com/photo-1554284126-aa88f21f33d5'
    },
    {
        title: 'Hiking',
        description: 'Keep your hiking group organized. Share routes, plan hikes, and keep everyone updated with the latest information.',
        imgUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0'
    },
    {
        title: 'Hockey',
        description: 'Enhance your hockey team management. Schedule practices, manage games, and keep your team connected and informed.',
        imgUrl: 'https://images.unsplash.com/photo-1600962864635-3dff7c21d3d4'
    },
    {
        title: 'Jiu-Jitsu',
        description: 'Organize your Jiu-Jitsu classes efficiently. Schedule events, share updates, and manage memberships all in one place.',
        imgUrl: 'https://images.unsplash.com/photo-1580645305471-79a9f35f665a'
    },
    {
        title: 'Judo',
        description: 'Simplify Judo class management. Create schedules, update students, and handle memberships easily and effectively.',
        imgUrl: 'https://images.unsplash.com/photo-1594137467279-d2d7c5f8b996'
    },
    {
        title: 'Karate',
        description: 'Manage your karate classes seamlessly. Plan events, share news, and handle payments with a few clicks.',
        imgUrl: 'https://images.unsplash.com/photo-1606004904453-0e22f66a4740'
    },
    {
        title: 'Mixed Martial Arts (MMA)',
        description: 'Take control of your MMA team management. Schedule training sessions, share fight updates, and collect fees online.',
        imgUrl: 'https://images.unsplash.com/photo-1551601651-c583c5efad80'
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
                                <img src={data.imgUrl} className="card-img-top" alt={data.title} style={{ height: '200px', objectFit: 'cover' }} />
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
