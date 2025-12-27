class PaymentInterface {
    ProcessPayment(amount){
        throw "Not Implemented !";
    }

    refund(id) {
        throw "NOt Implemented"
    }
}

class Razerpay extends PaymentInterface {
    // method overriding

    processPayment(amount){
        console.log("Razorpay pay:" , amount);
    }

    refund(id) {
        console.log("Razorpay refund : " , id);
    }
}

const rp = new Razorpay();
rp.processPayment(100);
rp.refund();
