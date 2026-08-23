import { useOptimistic, useState, useTransition } from "react";

export default function Like() {
  const [like, setLike] = useState(false);
  const [optimisticLike, setOptimisticLike] = useOptimistic(
    like,
    (currentLike, newLike) => newLike
  );

  const [isPending, startTransition] = useTransition();
  async function click() {
    const newLike = !optimisticLike;
    startTransition(async () => {
      setOptimisticLike(newLike);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            body: JSON.stringify({
              liked: newLike,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Like API failed");
        }
        const data = await response.json();
        console.log("Like API:", data);
        setLike(newLike);

      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <button type="button" onClick={click} >
      {optimisticLike ? "Liked ❤️❤️😘" : "Like 👍"}
    </button>
  );
}