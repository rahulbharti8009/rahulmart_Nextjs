"use client";

import {
  Shirt,
  Sparkles,
  Home,
  Baby,
  Smartphone,
  Watch,
  Footprints,
  Gem,
  Dessert,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const categorie = [
  {
    id: 1,
    name: "Fashion",
    icon: "/decore.png",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    name: "beauty",
    icon: "/decore.png",
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    id: 3,
    name: "Home Decor",
    icon: "/decore.png",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 4,
    name: "Kids",
    icon: "/decore.png",
    color: "from-sky-500 to-cyan-500",
  },
  {
    id: 5,
    name: "Electronics",
    icon: "/decore.png",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 6,
    name: "Accessories",
    icon: "/decore.png",
    color: "from-emerald-500 to-green-500",
  },
  {
    id: 7,
    name: "Footwear",
    icon: "/decore.png",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 8,
    name: "Jewellery",
    icon: "/decore.png",
    color: "from-yellow-500 to-orange-400",
  },
  {
    id: 9,
    name:"kidswear",
    icon: "/decore.png",
         color:"from-red-500 to-blue-500",
  }
]  

interface Props{
    id: number
    name : string,
    image: string,
    icon: any,
}

export default function CategorySection() {
const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Props[] | []>(categorie)

  return (
    <section className="w-full py-10 bg-linear-to-b from-white via-white-50 to-white">
      <div className="flex flex-wrap mx-auto px-6 justify-center gap-6">

        {/* Categories */}
          {categories && categories.map((item, i) => (
            <div key={i} className=" text-center group bg cursor-pointer" onClick={()=> {
                router.push(`/category/${item.name}?id=${item.id}`)
            }}>
                
                {/* inner card */}
              <div className="relative flex flex-col rounded-3xl pt-4  "  >
                  {/* image bg */}
                <div
                    className={`
                            relative z-10 w-35 h-30 mx-auto rounded-tl-[80] rounded-tr-[80] rounded-bl-[10] rounded-br-[10]
                            bg-linear-to-r from-orange-500 to-amber-500
                            flex items-center justify-center shadow-lg
                        `}
                       />
                {/* Image  */}
                <div
                    className={`z-20 bottom-1 right-0 left-0
                    absolute  mx-auto 
                    flex items-center justify-center 
                    group-hover:rotate-6
                    transition-all duration-500 ease-out
                    group-hover:-translate-y-6
                    group-hover:scale-105
                `}
                >
         <div className="relative h-[110] w-full overflow-hidden">
            <Image
              src={item?.icon}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

                </div>
                
              </div>
          
              {/* category name */}
              <h6
                className="
                  mt-2 text-sm font-normal text-gray-900
                  transition-colors duration-300
                  group-hover:text-pink-600
                "
              >
                {item?.name}
              </h6>
            </div>
          ))}
      </div>
    </section>
  );
}