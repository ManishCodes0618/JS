const jokes = document.querySelector("#jokes");
const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  console.log("Dad Joke:", res.data.joke);
  const li = document.createElement("li");
  li.append(res.data.joke);
  jokes.append(li);
};
