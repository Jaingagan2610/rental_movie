const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors")
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(cors())
app.use(express.json());

app.post('/Movie', async (req, res) => {
    console.log(req.body)

  try {
    const moviedata = req.body;
    for (const item of moviedata) {
      await prisma.movie.create({
        data: {
          name: item.name,
          year: item.year,
          duration :item.duration,
          image: item.image,
          rating :item.rating
        }
      });
    }



    res.json("movie added");
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/MOvie', async(req, res) => {
  try{
    const users1 = await prisma.movie.findMany();
    res.json(users1);
  }
  catch(err){
    res.send(err);
  }
}); 

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
