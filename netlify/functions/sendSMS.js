const {vonage}=require('@vonage/server-sdk');
exports.handler=async(eventt,context)=>{
    const vonage=new vonage({
        apiKey:'Master (df04d2e1)',
        apiSecret:'X6JeyPJC5mzU3bYM'
    })
    const from='';
    const to=eventt.queryStringParameters.phone;
    const text='code 12345';
    return new Promise((res,rej)=>{
        vonage.message.sendSms(from,to,text,(err,responseData)=>{
            if(err){
                rej({
                    statusCode:500,
                    body:err.toString()
                })
            }
            else{
                res({
                    statusCode:200,body:JSON.stringify(responseData)
                })
            }
        })
    })

}