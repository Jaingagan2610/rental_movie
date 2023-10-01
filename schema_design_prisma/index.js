const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors")
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(cors())
app.use(express.json());

app.post('/Movie', async (req, res) => {
  console.log(req.body);

  try {
    const moviedata = req.body;

    // Assuming req.body is an array of movie objects
    await prisma.movie.createMany({
      data: moviedata.map(movie => ({
        name: movie.name,
        year: movie.year,
        duration: movie.duration,
        image: movie.image,
        rating: movie.rating
      }))
    });

    res.json("Movies added");
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/addMovie',async (req,res)=>{
  try{
    await prisma.movie.create({
      data:req.body
    })
    res.send("Movie Added")
  }catch(err){
    console.log(err)
    res.status(400).json("error occured"+err)
  }
})

app.get('/Movie', async(req, res) => {
  try{
    const users1 = await prisma.movie.findMany();
    res.json(users1);
  }
  catch(err){
    res.send(err);
  }
}); 


app.patch('/Movie/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, year, duration,rating } = req.body;

    const updatedmovie = await prisma.movie.update({
      where: { id},
      data: {
        name,
        year,
        duration,
        rating

      }
    });

    res.json(updatedmovie);
  } catch (error) {
    console.error('Error updating movie:', error);
    res.status(500).json({ error: 'Error updating user' });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
