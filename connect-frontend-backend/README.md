# NOTES ON CONNECTING FRONTEND & BACKEND
**A BAD INDUSTRY PRACTICE OF DEPLOYING CODE 👇** 

Today I got to know about a bad practice often performed in industry that people serve frontend inside the backend statically.

The scenario is using build command in your react app and generating dist folder and then copying that folder into backend and deploying backend folder. Now, this helps in opmitizing cost but it's not an efficient way to do so because the next time whenever you need to change something in frontend, it won't reflect in your website.

This is because you're doing kanjoozi by statically serving frontend inside backend folder.
So, now you have to again generate the dist folder from the frontend by using build command after making the changes & then remove the existing dist folder from the backend folder & copy the new dist folder that being generated in the frontend folder.

now, push & deploy backend. And sadly, you have to do this repeatedly whenever you make changes to the frontend.

So, it's an ultimate bad practice of doing so which is generally depicted in the code.

```js
import express from 'express';

const app = express();

// A BAD INDUSTRY PRACTICE TO SERVE FRONTEND & BACKEND IN THE SAME FOLDER
app.use(express.static('dist'))

const port = process.env.PORT || 3000;

// listening on port
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})

```

---

**🚀 Fixing CORS Issues in Your Own Node + React Project!**  

So, you've built a cool **Express.js backend** serving some hilarious jokes and a **React frontend** to display them. But boom 💥— **CORS error** strikes! Your jokes are blocked. Let’s fix this step by step! 🛠️  

---  

### **🧐 What's Happening?**
When your React app (running on, say, `http://localhost:3000`) tries to fetch data from your Express API (`http://localhost:5000`), the browser says **"Nope! Not allowed."** ❌  

Why? Because by default, browsers **block cross-origin requests** for security reasons. This is called **CORS (Cross-Origin Resource Sharing).**  

---

### **✅ The Fix: Enable CORS in Express Backend!**  
In your **Node.js + Express** backend, do this:  

1️⃣ **Install CORS package**  
```sh
npm install cors
```

2️⃣ **Use it in your Express app**  
Modify your `server.js` (or `index.js`):  

```js
const express = require("express");
const cors = require("cors"); // ✅ Import cors
const app = express();

app.use(cors()); // ✅ Enable CORS for all requests

const jokes = [
  { id: 1, joke: "Why don't programmers like nature? It has too many bugs. 🐛" },
  { id: 2, joke: "How do you comfort a JavaScript bug? You console it. 😆" },
];

app.get("/jokes", (req, res) => {
  res.json(jokes);
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
```

---

### **🔥 Now, Try Fetching Again!**  
In your **React frontend**, inside your `App.js` or any component:  

```js
useEffect(() => {
  fetch("http://localhost:5000/jokes")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error("CORS Issue!", err));
}, []);
```

This should now **work like magic** 🪄✨, and you’ll see your jokes appear in the console!

---

### **💡 What If You Want More Control?**  
Instead of allowing **all** origins (`cors()`), you can specify only your frontend:  

```js
app.use(
  cors({
    origin: "http://localhost:3000", // Allow only this frontend
    methods: ["GET", "POST"], // Allowed methods
  })
);
```

---

### **🎯 Summary**
- **CORS issue happens** when your frontend and backend are on different origins.
- **Solution?** Use the `cors` package in your Express backend.
- **Boom! 💥** Your React app can now fetch your funny jokes! 🎉  

Now go ahead, make people laugh with your API! 😆 🚀