import React, { useState } from "react";
import { Card, CardFooter, Image, CardBody, Button } from "@nextui-org/react";
import { FaHeart, FaComment } from "react-icons/fa";
import { IoArrowDownOutline } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";

import "./Instagram.css";

function Instagram() {
  const list = [
    {
      img: "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [like, setLike] = useState(0);
  const [comm , setComm] = useState(false)
  const [comment,setComment] = useState([])

  function handeleLike() {
    setLike(like + 1);
  }

const handleCommant= ()=>{
    setComm(!comm)
}

  return (
    <div className="main gap-2 grid grid-cols-2 sm:grid-cols-4 ">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{like}</p>

            <div className="testing">
              <ul className="testing">
                <Button onClick={handeleLike}>
                  <li>
                    <FaHeart />
                  </li>
                </Button>

                <li>
                    <Button onClick={handleCommant} >
                  <FaComment />

                    </Button>
                </li>
                <li>
                  <IoArrowDownOutline />
                </li>
                <li>
                  <CiShare2 />

                </li>
              </ul>
            </div>

            {comm &&
             (
             <div>
                <input type="text"
                onChange={((e)=>setComment(e.target.value))} 
                />
             </div>) }

          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Instagram;
