const api = "https://api.adviceslip.com/advice";
const advice = async () => {
  const respone = await fetch(api);
  const advice = await respone.json();
  return advice.slip;
};
