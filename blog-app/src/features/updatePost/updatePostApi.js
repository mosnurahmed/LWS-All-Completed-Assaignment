import axios from "../../utils/axios";

export const updatePost = async ({ id, value}) => {


  if (typeof value === "number") {
   
    const updateLikes = {
      likes:value,
    };
    const response = await axios.patch(`/blogs/${id}`, updateLikes);

    return response.data;
  }
  if (typeof value === "boolean") {
   
    const updateSaved = {
      isSaved: !value,
    };
    const response = await axios.patch(`/blogs/${id}`, updateSaved);

    return response.data;
  }
};
