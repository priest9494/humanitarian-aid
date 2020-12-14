const database = require('./database');

let helloRepository = {};

helloRepository.getAllMessages = async function() {
    let messages = await database
		.select('message')
        .from('hello');
        
    return messages;
}

module.exports= helloRepository;