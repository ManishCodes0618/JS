const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const search = form.elements.query.value;
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${search}`,
  );
  //   const imgLink = res.data[0].show.image.medium;
  const img = document.createElement("img");
  addImg(res.data);
  form.elements.query.value = "";
});

const addImg = (shows) => {
  for (let result of shows) {
    const img = document.createElement("img");
    img.src = result.show.image.medium;
    document.body.append(img);
  }
};
