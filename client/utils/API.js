import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
const APIKEY = "&api_key=	AIzaSyDDA4E0wBT3m8PV1SWyxi0BsQSGgw2TKBU";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
