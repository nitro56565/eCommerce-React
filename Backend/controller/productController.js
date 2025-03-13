import axios from "axios";
export const fetchProducts = async(req,res) =>{

    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        res.json(response.data);

        
    } catch (error) {
        console.error("❌ Error fetching products:", error);
        res.status(500).json({message:"Error fetching products",error});
    }
    
}