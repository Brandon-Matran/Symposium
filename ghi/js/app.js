function createCard(
  name,
  description,
  pictureUrl,
  dateStart,
  dateEnd,
  location
) {
  return (createCard ? `<div class="card">
    <img src=${pictureUrl} class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <h6 class="card-subtitle">${location}</h6>
    <p class="card-text">${description}</p>
    <p class="card-footer">${dateStart} to ${dateEnd}</p>
    </div>
    </div>` : "NO")
}

window.addEventListener("load", async () => {
  const url = "http://localhost:8000/api/conferences/";

  try {
    const response = await fetch(url);

    if (!response.ok) {

        document.querySelector('#alert').style.display = 'block';
          }




     else {
      const data = await response.json();
      console.log(data.conferences[0])

      for (let conference of data.conferences) {
        const detailURL = `http://localhost:8000${conference.href}`;
        const detailResponse = await fetch(detailURL);
        if (detailResponse.ok) {
          const detailData = await detailResponse.json();
          const title = detailData.conference.name;
          const description = detailData.conference.description;
          const image = detailData.conference.location.picture_url;
          const dateStart = new Date(detailData.conference.starts)
          const dateEnd = new Date(detailData.conference.ends);
          const location = detailData.conference.location.name;
          const html = createCard(
            title,
            description,
            image,
            dateStart.toLocaleDateString(),
            dateEnd.toLocaleDateString(),
            location
          );
          const column = document.querySelector(".col");
          column.innerHTML += html;
        }
      }
    }
  } catch (e) {
    console.log("error", e);

  }
});
