const IndexFactory = require('@tryghost/algolia-indexer');

exports.handler = async (event) => {
    console.log('hai')
    return {
        statusCode: 200,
        body: JSON.stringify({ hai: 'henlo'})
    }
};
