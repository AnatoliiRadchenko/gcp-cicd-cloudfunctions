/*
Radchenko Anatolii
*/
exports.helloWorld=(req,res)=>{
  const message="<br>Cloudfunction by Radchenko Anatolii!<br>app ver.1.2";
  res.status(200).send(message);
}
