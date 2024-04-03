export default async function handler(req, res) {
  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Pinned to a specific version of Stable Diffusion
      // See https://replicate.com/stability-ai/sdxl
      version: "6443cc831f51eb01333f50b757157411d7cadb6215144cc721e3688b70004ad0",

      // This is the text prompt that will be submitted by a form on the frontend
      input: { 
        "steps": 20,
        "width": 1024,
        "height": 1024,
        "upscale": true,
        "upscale_steps": 10,
        "negative_prompt": "",
        "prompt": req.body.prompt,
      },
    }),
  });

  if (response.status !== 201) {
    let error = await response.json();
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: error.detail }));
    return;
  }

  const prediction = await response.json();
  res.statusCode = 201;
  res.end(JSON.stringify(prediction));
}