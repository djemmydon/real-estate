import axios from "axios";
import nc from "next-connect";

const handler = nc();

handler.post(async (req, res) => {
  const projectId = "ej3b7zgv";
  const dataset = "production";
  const tokenWithAccess =
    "skSqiUAHvYmir8tmKiBnj7LcMQmYvQw6gdKK3IrSSQtHyJk6i18DdXsqTwzWVJIlHosSziuOMWXvr8McEfHoMJBBAIwdIsT61sCo5pMkhwpzUxjROm4E2S4howUjmnA1F8Q7LjnCYgyRmQqGjaf74z0CVvWRZhkXM6M6hX7ZV4U5kmgeYXLB";

  const createMutation = [
    {
      create: {
        _type: "post",
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
      },
    },
  ];
  const { data } = await axios.post(
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

  const postId = data.results[0].id;
  const propa = {
    _id: postId,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  };


  res.status(201).send({...propa});
});

export default handler;
