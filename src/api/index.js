import { utils } from "@/utils";
import axios from "axios";

export const generateImage = async (formData) => {
  try {
    
    const response = await axios.post(`${utils.baseUrl}/images`, formData);
    return response.data;

  } catch (e) {
    throw new Error(e);
  }
};

export const getImagesGenerated = async () => {
    try {
        const response = await axios.get(`${utils.baseUrl}/images`);
        return response.data;
    } catch(e) {
        throw new Error(e);
    }
}
