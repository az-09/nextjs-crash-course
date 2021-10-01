import MeetupList from "../components/meetups/MeetupList"


const MEETUPS =[
    {
        id: 1,
        title: 'A',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/St_Pancras_Railway_Station_2012-06-23.jpg',
        address: 'Address',
        description: 'This is a second meetup'
    },
    {
        id: 2,
        title: 'A',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/St_Pancras_Railway_Station_2012-06-23.jpg',
        address: 'Address',
        description: 'This is a second meetup'
    },
    {
        id: 3,
        title: 'A',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/St_Pancras_Railway_Station_2012-06-23.jpg',
        address: 'Address',
        description: 'This is a second meetup'
    },
    {
        id: 4,
        title: 'A',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/St_Pancras_Railway_Station_2012-06-23.jpg',
        address: 'Address',
        description: 'This is a second meetup'
    }

]

export default function HomePage(){

    return <MeetupList meetups={MEETUPS}/>

}
