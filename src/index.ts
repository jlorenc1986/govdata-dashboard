import express, {Response, Request }from 'express';
import path from 'path'
import { getDashboardData } from './controllers/getDashboardData';
import { SALUTATION, TITLE } from './constants/string';
const app = express();
const port = 3000;

/**
 * lets setup view engine with plug 
 */
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './views/'))

app.get('/', (req: Request, res: Response) => {

    res.render('index',{title: TITLE, message: SALUTATION, data: getDashboardData()});
});

app.listen(port, () => {

    console.log(`server running on port ${port}`)
});



export default app