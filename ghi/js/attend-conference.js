window.addEventListener('DOMContentLoaded', async () => {
    const selectTag = document.getElementById('conference')
    const url = `http://localhost:8000/api/conferences/`
    const response = await fetch(url)
    if (response.ok) {
        const data = await response.json()
        for (let conference of data.conferences) {
            const option = document.createElement('option')
            option.value = conference.href
            option.innerHTML = conference.name
            selectTag.appendChild(option)
        }
        selectTag.classList.remove('d-none')
        const loadingSpinnerTag = document.getElementById('loading-conference-spinner')
        loadingSpinnerTag.classList.add('d-none')
    }
        const formTag = document.getElementById('create-attendee-form')
        formTag.addEventListener('submit', async (event) => {
            event.preventDefault()
            const formData = new FormData(formTag)
            const json = JSON.stringify(Object.fromEntries(formData))
            console.log(json)
            const attendeeURL = `http://localhost:8001/api/attendees/`
            const fetchConfg = {
                method: "post",
                body: json,
                headers: {
                    'Content-type': 'application/json',
                }
            }
            const attendeeResponse = await fetch(attendeeURL, fetchConfg)
            if (attendeeResponse.ok) {
                formTag.reset()
                const newAttendee = await attendeeResponse.json()
                console.log("ATTENDEE INFO", newAttendee)

            }

            const successTag = document.getElementById('success-message')
            formTag.classList.add('d-none')
            successTag.classList.remove('d-none')

    }




)})
