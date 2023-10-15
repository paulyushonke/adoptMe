async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  let apiUrl = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}`;

  if (breed) {
    apiUrl += `&breed=${breed}`;
  }

  const res = await fetch(apiUrl);

  if (!res.ok) {
    throw new Error(
      `Pet search is not okay for ${animal}, ${location}, ${breed}`
    );
  }

  return res.json();
}

export default fetchSearch;
