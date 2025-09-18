import axios from "axios";

export const fetchData = async () => {
  const accessToken = import.meta.env.VITE_API_KEY;
  try {
    const res = await axios.get(
      `https://cdn.contentful.com/spaces/anv2u8ts9c4u/entries?access_token=${accessToken}`
    );
    return res;
  } catch (error) {
    console.error(error);
    return [];
  }
};
