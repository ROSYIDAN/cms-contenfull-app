import axios from "axios";

export const fetchData = async () => {
  const spaceId = import.meta.env.VITE_SPACE_ID;
  const accessToken = import.meta.env.VITE_API_KEY;
  try {
    const res = await axios.get(
      `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}`
    );
    return res;
  } catch (error) {
    console.error(error);
    return [];
  }
};
