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
      version: "4acb778eb059772225ec213948f0660867b2e03f277448f18cf1800b96a65a1a",

      // This is the text prompt that will be submitted by a form on the frontend
      input: { 
        steps: 17,
        width: 1152,
        height: 1152,
        output_format: "webp",
        output_quality: 100,
        negative_prompt: "",
        number_of_images: 1,
        prompt: req.body.prompt,
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