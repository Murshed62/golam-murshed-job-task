const API_BASE_URL = "https://contact.mediusware.com/api";

const fetchContacts = async ({
  page = 1,
  searchTerm = "",
  onlyEven = false,
}) => {
  const response = await fetch(`${API_BASE_URL}/contacts/`);
  if (!response.ok) {
    throw new Error(`Error fetching contacts: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

const fetchCountryContacts = async (
  country,
  { page = 1, searchTerm = "", onlyEven = false }
) => {
  const response = await fetch(`${API_BASE_URL}/country-contacts/${country}/`);
  if (!response.ok) {
    throw new Error(`Error fetching country contacts: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export { fetchContacts, fetchCountryContacts };
