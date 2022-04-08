import {cilent} from '../../../lib/Sanity';

const query=`*[_type=="rides"]{
    "service":title,
    "iconUrl":icon.asset->url,
    priceMultiplier,
    orderById
  }`


  const getRideTypes=async()=>{
    try {
        const sanityResponse =await cilent.fetch(query)
        res.status(200).send({message:'success',data:sanityResponse})
        
    } catch (error) {
        res.status(500).send({message:'error',data:error.message})
    }
  
  }
