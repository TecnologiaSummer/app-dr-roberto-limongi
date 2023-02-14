import app from './app';

const port = process.env.PORT_APP;
app.listen(port, () => {
  console.log(`Listening in port ${port}`);
});
