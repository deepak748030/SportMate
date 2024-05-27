import React from 'react';
import Layout from '../components/layouts/Layout';

const imgData = [{
    title: 'Athletics',
    description: 'Your athletics club will enjoy using Teamer: Plan training sessions or races and collect membership fees. All fixtures, messages and events in one place for everyone.'
},
{
    title: 'Basketball',
    description: 'Your basketball team can be easily managed online with Teamer. From availability and selection to collecting payments. All training dates, fixtures, messages and events together. '
},
{
    title: 'Canoeing',
    description: 'Speed up admin for your canoeing teams: Use Teamer to share events, pick teams, discuss tactics and do payments online. '
},
{
    title: 'Cricket',
    description: 'Using Teamer can transform how you run your cricket team: Schedule nets sessions or league games, share messages and collect memberships or subs. '
},
{
    title: 'Exercise Class',
    description: 'Teaching an exercise class indoors or outside? Use Teamer to do the admin easily. Create events, confirm attendance and get paid online. '
},
{
    title: 'Football',
    description: 'Teamer will help you manage your football team from availability and selection to collecting online payments. All training dates, fixtures, messages and events in one place. '
},
{
    title: 'Gymnastics',
    description: 'If organising a gymnastics team is challenging then give Teamer a try: Schedule training or competitions, share messages and bring in membership online. '
},
{
    title: 'HIIT Class',
    description: 'Exercise classes like HIIT can be run like clockwork using Teamer. Share class times and venues and collect payments; convenient for instructors and attendees.'
},
{
    title: 'Hiking',
    description: 'Do you have a hiking group who meet regularly? Teamer is a great way to keep everyone in the know. Share routes, times and updates in the palm of your hand.'
},
{
    title: 'Hockey',
    description: 'Hockey teams will get plenty of use from the Teamer experience - Coaches can see who is available for training and pick teams while players can pay subs on their phone.'
},
{
    title: 'Jiu-Jitsu',
    description: 'Need to plan Jiu-Jitsu classes? Teamer is a simple way to schedule events, share fight times and tournaments, discuss bouts and belts. All the tools you wll need.'
},
{
    title: 'Judo',
    description: 'Running judo sessions? Create judo classes for different age groups, update your students and collect membership fees. Teamer works well for judo organisers.'
},
{
    title: 'Karate',
    description: 'Your karate groups can be organised effortlessly with Teamer. From special dan gradings to news from your sensei. All karate events, messages and payments.'
},
{
    title: 'Mixed Martial Arts (MMA)',
    description: 'Speed up admin for your mixed martial arts teams: Use Teamer to share events, select teams, talk takedowns and tap outs and collect fees online.'
},




]


function Sports() {
    return (
        <Layout title="SPORTS_MATE - SPORTS">
            <div className="container text-center p-4">
                <h2 className="fw-bold">SPORTS</h2>
                <p className="fs-5 fs-md-4">Easy-to-use, Teamer is the perfect solution to manage attendance and micro-payments online.</p>
            </div>

            <div className='container'>
                <div className='row'>
                    {imgData.map((data, index) => (
                        <div key={index} className='col-sm-12 col-md-3 mb-4'>
                            <div className="card mx-auto bg-light" style={{ maxWidth: '430px', backgroundColor: 'rgba(211, 205, 205, 0.467)', height: "450px" }}>
                                <img src={`sportsimg/${index + 1}.jpg`} className="card-img-top" alt="Card image" />
                                <div className="card-body text-center">
                                    <h3 className="card-title fw-bold text-primary" style={{ opacity: '.6' }} >{data.title}</h3>
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
