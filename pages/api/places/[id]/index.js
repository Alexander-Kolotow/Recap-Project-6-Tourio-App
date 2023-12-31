import dbConnect from "../../../../db/models/connect.js";
import Place from "../../../../db/models/Places.js";

export default async function handler(request, response) {

  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Place.findById(id);

    if (!place) {
      return response.status(404).json({ status: "Place not found" });
    }

    response.status(200).json(place);
  }
}
