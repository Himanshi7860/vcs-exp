class NotificationInterface{
    send(message){
        throw "Must be implemented";
    }
}

class EmailNotification extends NotificationIntereface{
    send(message){
        console.log("Email Sent:" , message);
    }
}

class SMSNotification extends NotificationInterface{
    send(message){
        console.log("SMS sent:", message);
    }
}