require('dotenv').config({ path: './.env' });

import { app } from './app';

app.listen(process.env.PORT, () => {
  console.log(`server is running at : ${process.env.PORT}`);
});
