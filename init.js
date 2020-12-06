import app from "./app";

const PORT = 4000;

const handleListening = () => {
  console.log('================================================');
  console.log(`✅ server started ... listening on port: ${PORT}`);
}

/* 🔥 start server 🔥*/
app.listen(PORT, handleListening);