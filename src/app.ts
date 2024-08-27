import express from 'express';
import config from './config'
import routes from './routes'
const app = express();

// middleware setup
app.use(express.json())

// route setup
app.use('/api', routes)
// start server
const PORT = config.port || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;