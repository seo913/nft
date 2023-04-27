import axios from "axios";
import { useEffect, useState } from "react";
import { SiGhostery } from "react-icons/si";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { tokenId } = useParams();
  const [metadata,setMetadata] = useState();

  const getNft = async()=>{
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    getNft();
  },[]);
  // useEffect(()=>{
  //   console.log(metadata);
  // },[metadata]);
    return (
    <div className="flex flex-col xl:flex-row justify-center items-center py-16 bg-gray-900">{
      metadata ? (
      <>
      <div className="max-w-[512px]">
        <img className="rounded-t-2xl" src={metadata.image}></img>
        <ul className="grid grid-cols-4 gap-8 py-8 bg-gray-600 rounded-b-2xl text-center">
          {metadata.attributes.map((v,i)=>{
            return(
              <li key={i}>
                <div>{v.trait_type}</div>
                <div className="mt-1 border-t-2 font-bold">{v.value}</div>
              </li>
            )
          })}
        </ul>
        </div>
        <div className="m-8">
          <div className="text-4xl flex items-center">
          <div>{metadata.name}</div>
          <div className="bg-blue-500 w-6 h-6 rounded-full flex justify-center items-center ml-2">
                    <SiGhostery size={18} />
            </div>
          </div>
          <div className="mt-8 text-2xl">{metadata.description}</div>
        </div>
        </>
      ) :( 
      <div>로딩중입니다...</div>)
    }</div>
    ) 
  };
  
  export default Detail;