const AWS = require("aws-sdk")

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIAWJ5SJX432RXAD5MR",
    secretAccessKey: "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"
})

const getReadings = () => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient()
    let readings
    const params = {
        TableName: 'Flowr'
    }
    
    dynamoDB.scan(params, function(err,data){
        if(err) console.log(err)
        else {
            readings = data
            console.log(data)
        }
    })
    return readings
}

getReadings()

