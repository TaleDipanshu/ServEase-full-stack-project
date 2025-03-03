
import connectDB from './src/db/db.js'; 
import {app} from "./app.js"

const PORT = process.env.PORT || 5000;



connectDB()
    .then(() => {
       
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error starting server:', err);
        process.exit(1);
    });
