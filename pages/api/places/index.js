import Place from "@/db/models/Places";
import dbConnect from "@/db/models/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {

    const places = await Place.find();
    return response.status(200).json(places);
  } else {
    return response.status(405).json({ message: "No such place!" });
  }
}
