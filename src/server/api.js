const BASE_URL = 'https://api.jikan.moe/v4/seasons';
const getTrendApi = async() =>{
    try {
        const response = await fetch(`${BASE_URL}/upcoming`);
        const responseJson = await response.json();
        return responseJson.data;
        } catch (error) {
        console.log(error);
        }
    };
const getSeasonNow = async () => {
  try {
    const response = await fetch(`${BASE_URL}/now`);
    const responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.log(error);
  }
};

export {getTrendApi, getSeasonNow};


