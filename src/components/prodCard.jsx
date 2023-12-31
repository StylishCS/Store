import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { useContext, useEffect, useState } from "react"
import { CartContext } from "../CartContext";

const ProdCard = ({data})=>{
    const {addToCart} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);
    const increment = () =>{
        setQuantity(quantity+1);
    }
    const decrease = () =>{
        if(quantity>0){
            setQuantity(quantity-1);
        }
    }
    return(
        <Card className="m-20 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={data.image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {data.name}
        </Typography>
        <Typography>
          سعر الجمله: {data.netPrice}
          <br />
          سعر البيع: {data.sellPrice}
          <br />
          الكميه: {data.stock}
          <br />
          الكود: {data.labelId}
        </Typography>
         <Typography>
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button onClick={decrease} className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                <span className="m-auto text-2xl font-thin">-</span>
                </button>
                <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={quantity} onChange={e=>setQuantity(+e.target.value)}></input>
                <button onClick={increment} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
         </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {/* add to cart */}
        <Button onClick={()=> addToCart(data, quantity)}>اضف الي السله</Button>
        {/*  */}
      </CardFooter>
        {/* update */}
      <Button>تحديث المنتج</Button>
        {/*  */}
    </Card>
    )
}

export default ProdCard