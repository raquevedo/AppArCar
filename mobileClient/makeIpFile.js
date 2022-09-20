try {
  fs.unlinkSync('host_instance.json')
} catch(err) {
  console.error(err)
}

var ip = require("ip");
ip_address = ip.address();

const fs = require('fs');

var path="http://"+ip_address+":8000"

const content = {
    "path":path
};

fs.writeFile('host_instance.json', JSON.stringify(content), err => {
  if (err) {
    console.error(err);
  }
});
console.log("Ip file created");

