import axios from "axios";
import { API_URL, API_URL_STAGE } from "../core/constants/constants";
axios.defaults.baseURL = API_URL
export async function createLead(payload:any) {
    try {
      const response = await axios.post(`lead/create`, payload);
      if (response && response.status === 201) {
        return response.data;
      } else {
        throw response;
      }
    } catch (e) {
    console.log("🚀 ~ file: lead.service.tsx:12 ~ createLead ~ e:", e)
    //   console.log(e?.response?.data?.error || "Something went wrong!");
      throw e;
    }
  }

  export async function updateLead(id:number , payload:any) {
    try {
      const response = await axios.put(`lead/update/${id}`, payload);
      if (response && response.status === 200) {
        return response.data;
      } else {
        throw response;
      }
    } catch (e) {
    console.log("🚀 ~ file: lead.service.tsx:27 ~ updateLead ~ e:", e)
    //   console.log(e?.response?.data?.error || "Something went wrong!");
      throw e;
    }
  }



  