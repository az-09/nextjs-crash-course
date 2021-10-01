import NewMeetupForm from "../../components/meetups/NextMeetupForm";


export default function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData)
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}