import axios from "axios";
import nc from "next-connect";

const handler = nc();

handler.post(async (req, res) => {
  const projectId = "ej3b7zgv";
  const dataset = "production";
  const tokenWithAccess =
    "skSqiUAHvYmir8tmKiBnj7LcMQmYvQw6gdKK3IrSSQtHyJk6i18DdXsqTwzWVJIlHosSziuOMWXvr8McEfHoMJBBAIwdIsT61sCo5pMkhwpzUxjROm4E2S4howUjmnA1F8Q7LjnCYgyRmQqGjaf74z0CVvWRZhkXM6M6hX7ZV4U5kmgeYXLB";

  const { data } = await axios.post(
    `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
    {
      mutations: [
        {
          create: {
            _type: "post",
            createdAt: new Date().toISOString(),
            src: req.src,
            name: req.title,
            image: req.price,
          },
        },
      ],
    },
    {
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${tokenWithAccess}`,
      },
    }
  );

  res.status(201).send("jdcnsdklnlsd");
  console.log()
});

export default handler;
