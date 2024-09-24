import express, { json } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const port = 3000;
const api_key = "AIzaSyBIiMqGM_PKgImHLREKRLmW5CA0KJgm8kA";

const genAI = new GoogleGenerativeAI(api_key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt =
  "Saya ingin membuat aplikasi 'Hidroponik Planning System'. Aplikasi ini akan membantu pengguna merencanakan langkah-langkah untuk menanam hidroponik. ingat, cukup balas dengan json encode saja Mohon berikan data berikut: \n1. Lebar lahan 20 X 20 Meter \n2. Tanaman yang ingin ditanam adalah bayam.\n\nDari data ini, saya ingin mendapatkan respons berupa: \n- Metode penanaman yang cocok \n- Merek pupuk dengan nama yang jelas dan pasti yang direkomendasikan \n- Jadwal pemberian pupuk. \n\nTolong berikan jawaban cukup dalam JSON encode saja.";

app.get("/", async (req, res) => {
  const result = await model.generateContent(prompt);
  const response = JSON.parse(
    result.response
      .text()
      .replace(/```json/g, "")
      .replace(/```/g, "")
  );
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
