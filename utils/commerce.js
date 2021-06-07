import Commerce from "@chec/commerce.js";
import CommerceSDK from "@chec/commerce.js";

let commerce = null

function getCommerce(commercePublicKey){
    if(commerce){
        return commerce;
    }else{
        const publicKey = commercePublicKey || process.env.COMMERCE_PUBLIC_KEY;
        const devEnviroment = process.env.NODE_ENV ==="development";
        if(devEnviroment && !publicKey){
            throw Error("Public key not found.")
        }
        commerce = new Commerce(publicKey, devEnviroment);
        return commerce;
    }
}

export default getCommerce;