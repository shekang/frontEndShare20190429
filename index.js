var express = require("express");
var app = express();

app.get("/jsonp", function(req, res) {
  var cbFunction = req.query.callback;
  res.send(`${cbFunction}({"ip":"110.110.110.110"})`);
  //或者不用那么麻烦直接通过express提供的API
  /** * res.jsonp({ip:"110.110.110.110"}); */
});



 app.post("/simCors", function(req, res) {
   res.set("Access-Control-Allow-Origin", "http://shekang.me");
   res.send({ status: 200, msg: "简单cors请求" });
 });



 //options类型用于CORS非简单请求的预检请求
 app.options('/cors',function(req,res){
    res.set('Access-Control-Allow-Origin','http://shekang.me')  //必须设置
    res.set('Access-Control-Allow-Methods','PUT') //必须设置
    res.set('Access-Control-Allow-Headers','X-Custom-Header') //如果浏览器请求包括Access-Control-Request-Headers字段，则Access-Control-Allow-Headers字段是必需的。
    res.send({status:400,msg:'预检成功！'})
 })
 app.put("/cors", function(req, res) {
   res.set("Access-Control-Allow-Origin", "http://shekang.me");
   res.send({ status: 200, msg: "经过预检的请求" });
 });

app.listen(3000, () => console.log("Example app listening on port 3000!"));
