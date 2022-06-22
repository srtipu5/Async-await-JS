// restaurant order management

const order = (...orderItems)=>{
    const promise = new Promise((resolve,reject)=>{
        if(orderItems.length > 0){
            resolve("Your order items are: " + orderItems + "\nPlease wait some time");
        }else{
            reject("Please order some items.");
        }
    });
    return promise;
}

const checkAvailability = ()=>{
    const availabe = true;
    const promise = new Promise((resolve,reject)=>{
        if(availabe){
            resolve("You order has been confirmed successfully.");
        }else{
            reject("Sorry not available.");
        }
    });
    return promise;
}

const cooking = ()=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Cooking has been completed.");
        },5000);
    });
    return promise;
}

const delivery = ()=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("Order has been successfully delivered to customer.");
    },2000);
    });
    return promise;
}
// call asynchronous code like synchronous
const restaurant = async()=>{
    try{
        const res1 = await order('burger','coke');
        console.log(res1);
        const res2 = await checkAvailability();
        console.log(res2);
        const res3 = await delivery();
        console.log(res3);
    }catch(err){
        console.log(err);
    }finally{
        console.log("Thank You !!");
    }

}

restaurant();