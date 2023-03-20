import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Add() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // const projectId = "ej3b7zgv";
  // const dataset = "production";
  // const tokenWithAccess =
  //   "skSqiUAHvYmir8tmKiBnj7LcMQmYvQw6gdKK3IrSSQtHyJk6i18DdXsqTwzWVJIlHosSziuOMWXvr8McEfHoMJBBAIwdIsT61sCo5pMkhwpzUxjROm4E2S4howUjmnA1F8Q7LjnCYgyRmQqGjaf74z0CVvWRZhkXM6M6hX7ZV4U5kmgeYXLB";

  const submitHandler = async (value) => {
    const { name, description, price } = value;

    const data = {
      name: name,
      description: description,
      price: price,
    };

    axios.post(`/api/property`, data).then((res) => {
      if(res.data) {
        console.log(`Property  Added Successfully`);
        console.log(res.data);
      }else{
        console.log(`Property error`)
      }
    })

    console.log(data);
  };

  return (
    <div>
      <form
        action=""
        className="flex flex-col py-3 px-3 max-w-xl mx-auto"
        onSubmit={handleSubmit(submitHandler)}
      >
        <label htmlFor="" className=" py-1 flex flex-col mb-5 ">
          <span>Name</span>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Property name"
            className=" w-full border-2 border-rose-200 rounded py-2 px-3"
          />

          {errors.name && <p>Your name is required</p>}
        </label>

        <label htmlFor="" className=" py-1 flex flex-col mb-5 ">
          <span>Price</span>
          <input
            {...register("price", { required: true })}
            type="text"
            placeholder="price"
            className=" w-full border-2 border-rose-200 rounded py-2 px-3"
          />
          {errors.email && <p>Your email is required</p>}
        </label>

        <label htmlFor="" className=" py-1 flex flex-col">
          <span>Description</span>
          <textarea
            {...register("description", { required: true })}
            placeholder="Enter your comment here"
            className=" w-full border-2 border-rose-200 rounded py-2 px-3"
          />

          {errors.comment && <p>Your name is required</p>}
        </label>

        <button
          type="submit"
          className=" border-t-orange-400 border-2 bg-orange-400"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Add;

// import React from 'react'

// function Add() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

//   console.log(watch("example"));

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("example")} />

//       <input {...register("exampleRequired", { required: true })} />
//       {errors.exampleRequired && <span>This field is required</span>}

//      <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Add
