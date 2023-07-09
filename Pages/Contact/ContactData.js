import { handleMeta } from "../../utils";


export const createSchema = () => {

}

export const contactMeta = () => {
  // Meta Object 
  const meta = {
    title: "Contact Page",
    og_title: true
  }
  // Call Meta Function
  handleMeta(meta);
}

