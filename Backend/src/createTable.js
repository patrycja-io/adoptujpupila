// createTable.js

const AWS = require("aws-sdk");

AWS.config.update({ region: "us-west-2" }); // Update with your desired region

const dynamoDB = new AWS.DynamoDB();

const createTable = async () => {
  const params = {
    TableName: "ad_table", // Replace with your desired table name
    KeySchema: [
      { AttributeName: "ad_id", KeyType: "HASH" }, // Partition key
      // Add more KeySchemas for sort keys if needed
    ],
    AttributeDefinitions: [
      { AttributeName: "ad_id", AttributeType: "S" }, // Replace "S" with appropriate data type if needed
      // Add more AttributeDefinitions for other attributes
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5, // Adjust based on your read capacity needs
      WriteCapacityUnits: 5, // Adjust based on your write capacity needs
    },
  };

  try {
    const data = await dynamoDB.createTable(params).promise();
    console.log("Table created:", data);
  } catch (err) {
    console.error("Error creating table:", err);
  }
};

createTable();
