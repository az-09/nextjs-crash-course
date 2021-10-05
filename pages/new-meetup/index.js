import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NextMeetupForm";
import Head from 'next/head'

export default function NewMeetupPage() {
    async function addMeetupHandler(enteredMeetupData) {
       const response = await fetch('/api/new-meetup', {
           method: 'POST',
           body: JSON.stringify(enteredMeetupData),
           headers: {
               'Content-Type': 'application/json'
           }
       })

       const data = await response.json()

       console.log(data)
    }

    return (
        <Fragment>
            <Head>
            <title>Add a new meetup</title>
                <meta name="description" content="Add a new meetup"/>


            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    ) 
}