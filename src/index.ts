import express, {Response, Request }from 'express';
import path from 'path'
const app = express();
const port = 3000;

/**
 * lets setup view engine with plug 
 */
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './views/'))

app.get('/', (req: Request, res: Response) => {

    res.render('index',{title: "GovData Dashoboard", message: 'soon a great list will be here'});
});

app.listen(port, () => {

    console.log(`server running on port ${port}`)
});


