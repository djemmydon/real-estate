import axios from "axios";
import nc from "next-connect";

const handler = nc();

handler.post(async (req, res) => {
  const projectId = "ej3b7zgv";
  const dataset = "production";
  const tokenWithAccess =
    "skq1Z5NuJuFGXYeWLKmXzSYCwuAKiB3WE5HYhgyRtFhHODTnQPgtUTM2r7Q08rORGMieKePgTtAMCcqmtRcrgzNRMdP6yqR4nAmIwXgpTBs849lVwmL9Hso3IZ1sMi1MTc1CwvCbrKxTFIItjdP4X5ALDOBYt4V5MRGJRgXTiVhAFTaG7CoQ";

  const createMutation = [
    {
      create: {
        _type: "test",
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
      },
    },
  ];
  await axios.post(
    `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
    {
      mutations: createMutation,
    },
    {
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${tokenWithAccess}`,
      },
    }
  );

  res.status(201).send({ message: "Sent" });
  console.log(res)
});

export default handler;
