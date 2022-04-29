const api = `https://api.adviceslip.com/advice/`;

const advice = async () => {
  const id = Math.floor(Math.random() * 200);

  const respone = await fetch(api + id);
  const advice = await respone.json();
  return advice.slip;
};
