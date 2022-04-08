const getLocationCoordinates = async (req,res)=>{
    const mapbox =`${process.env.MAP_BOX_PLACES_API_URL}/${req.body.location}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;
    try {
        const response = await fetch(mapbox);
        const data =response.json();
        res.status(200).send({message:'success',data:data})
    } catch (error) {

         res.status(500).send({message:'success',data:error.message})
    }
}
export default getLocationCoordinates;  