// Get the cookie out of the cookie store
const payloadCookie = await cookieStore.get('jwt_access_payload');
console.log('cookie:', payloadCookie.value)// FINISH THIS
if (payloadCookie) {
  // The cookie value is a JSON-formatted string, so parse it
  const encodedPayload = JSON.parse(payloadCookie);




//   // Convert the encoded payload from base64 to normal string
  const decodedPayload = atob(encodedPayload)

//   // The payload is a JSON-formatted string, so parse it
  const payload = JSON.parse(decodedPayload)
  console.log(payload)

//   // Print the payload
  console.log(payload);

//   // Check if "events.add_conference" is in the permissions.
//   // If it is, remove 'd-none' from the link
  const permissions = payload.user.perms;
  console.log(permissions.includes("events.add_conference"))
  if (permissions.includes("events.add_conference")) {
    document.getElementById("navnew-conference").classList.remove("d-none");

  }


//   // Check if "events.add_location" is in the permissions.
//   // If it is, remove 'd-none' from the link
  if (permissions.includes("events.add_location")) {
    document.getElementById("navnew-location").classList.remove("d-none")
  }

}
