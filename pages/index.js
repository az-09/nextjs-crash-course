import { Fragment, useEffect, useState } from "react"
import MeetupList from "../components/meetups/MeetupList"
import { MongoClient } from 'mongodb'
import Head from 'next/head'

// const MEETUPS = [
//     {
//         id: 1,
//         title: 'A',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/St_Pancras_Railway_Station_2012-06-23.jpg',
//         address: 'Address',
//         description: 'This is a second meetup'
//     },
//     {
//         id: 2,
//         title: 'A',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/St_Pancras_Railway_Station_2012-06-23.jpg',
//         address: 'Address',
//         description: 'This is a second meetup'
//     },
//     {
//         id: 3,
//         title: 'A',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/St_Pancras_Railway_Station_2012-06-23.jpg',
//         address: 'Address',
//         description: 'This is a second meetup'
//     },
//     {
//         id: 4,
//         title: 'A',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/St_Pancras_Railway_Station_2012-06-23.jpg',
//         address: 'Address',
//         description: 'This is a second meetup'
//     }

// ]

// export async function getServerSideProps(context) {
//     const req = context.req
//     const res = context.res

//     return {
//         props: {
//             meetups: MEETUPS
//         }
//     }
// }
export async function getStaticProps() {
    const client = await MongoClient.connect(process.env.MONGODB)
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find().toArray()

    client.close()

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1 //seconds 1 second regenerate
    }
}

export default function HomePage(props) {
    // const [loadedMeetups, setLoadedMeetups] = useState([])
    // useEffect(() => {
    //     setLoadedMeetups(MEETUPS)
    // }, [])

    return (
        <Fragment>
            <Head>
                <title>NextJs Meetups</title>
                <meta name="description" content="Browe meetups generated in NextJs"/>

            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>

    )
}