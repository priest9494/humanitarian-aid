const helloRepository = require('../repository/helloRepository');

let helloService = {};

helloService.getHelloMessages = async function() {
    let res = await helloRepository.getAllMessages();
    return res;
}

module.exports = helloService;