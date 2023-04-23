import { createClient } from "next-sanity";


 const client = createClient({
  projectId: '1wr3jxz0', 
  dataset: 'dsone', 
  apiVersion:"2022-11-29",
  useCdn: false // `false` if you want to ensure fresh data
})

export default client
