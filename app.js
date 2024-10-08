const express = require('express');
const { sequelize } = require('./models');  // Removed migrateAndSeed

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const authRoutes = require('./routers');
app.use(authRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  console.log("DATABASE_URL:", process.env.DATABASE_URL);

  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});


