import MeetupDetail from "../../components/meetups/MeetupDetail";

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId



    return {
        props: {
            imag: 'https://upload.wikimedia.org/wikipedia/commons/6/60/St_Pancras_Railway_Station_2012-06-23.jpg',
            title: 'First Meetup',
            address:'Cupertiono',
            description: 'Descr.'
        }
    }
}

export default function MeetupDetails() {
    return <MeetupDetail image='https://upload.wikimedia.org/wikipedia/commons/6/60/St_Pancras_Railway_Station_2012-06-23.jpg' title='First Meetup' address='Cupertiono' description='Descr.' />
}