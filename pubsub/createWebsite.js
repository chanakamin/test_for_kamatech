const { PubSub } = require('@google-cloud/pubsub');
const {CertificateManagerClient} =
  require('@google-cloud/certificate-manager').v1;
const path = require('path');
require('dotenv').config();

const keyFilePath = process.env.GOOGLE_APPLICATION_CREDENTIALS = `rising-ocean-389912-5d5f56f33051.json`; // process.env.GOOGLE_APPLICATION_CREDENTIALS;
const pubsub = new PubSub({
  projectId: 'my-project-beckend2',
//  auth: {
//   keyFilename: keyFilePath,
//  }
});
console.log(pubsub)

// Set the name of the new topic
const topicName = 'my-new-topic';

// Create the new topic asynchronously
async function createTopic() {
  try {
    const topic = await pubsub.createTopic("OOOOOO", {
      maxRetries: 0,
      timeout: 6000,
    });
    // await topic.create();
    console.log(`Topic ${topicName} created successfully`);
  } catch (err) {
    console.error(err);
  }
}

// Export the createTopic function
exports.createTopic = createTopic;

