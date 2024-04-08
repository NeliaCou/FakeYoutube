export const getData = async function () {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
};
