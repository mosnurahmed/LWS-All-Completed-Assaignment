import axios from "../../utils/axios";

export const getJobs = async () => {
  const response = await axios.get("/jobs");
  return response.data;
};
export const postJobs = async (data) => {
  const response = await axios.post("/jobs", data);
  return response.data;
};
export const updateJobs = async (editData) => {
  const { id, data } = editData || {};
  console.log(editData);
  const response = await axios.patch(`/jobs/${id}`, data);
  return response.data;
};
export const deleteJobs = async (id) => {
  const response = await axios.delete(`/jobs/${id}`);
  return response.data;
};
