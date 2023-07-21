import axios from "../../utils/axios";

export const getBlog = async (value) => {
  let queryString = "";

  if (value === "newest") {
    queryString = "_sort=createdAt&_order=desc";
  }
  if(value ==="most_liked" ){
    queryString = "_sort=likes&_order=desc"
  }
  if(value ==="saved"){
    queryString = "isSaved_like=true"
  }

  const response = await axios.get(`/blogs?${queryString}`);

  return response.data;
};
