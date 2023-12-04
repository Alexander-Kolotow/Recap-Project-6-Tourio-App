import Place from "@/db/models/Places";
import dbConnect from "@/db/models/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const places = await Place.find();
      return response.status(200).json(places);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  if (request.method === "POST") {
    try {
      const placesData = request.body;
      await Place.create(placesData);
      return response.status(201).json({ status: "Place created" });
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}


