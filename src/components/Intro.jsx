import { SiGhostery } from "react-icons/si";
import { CONTRACT_ADDRESS } from "../web3.config";
const ranNum = Math.floor(Math.random()*1000) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

function Intro({totalNft,mintedNft,myNft}){

    return(
        <div className="bg-gradient-to-b from-transparent to-blue-400 to-100% pt-10 via-white via-10% ">
            <div className="max-w-screen-xl mx-auto px-4 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400 text-9xl truncate opacity-40">
            Da Den Bu
            </div>
            <div className="relative">
            <img src={imgSrc} alt="NFT" className="absolute w-40 h-40 rounded-full"/>
            <div className="w-40 h-40 rounded-full bg-white text-gray-950 flex justify-center items-center">
                Loading...
                </div>
            </div>
            <div className="mt-4 text-2xl text-blue-700 font-bold flex items-center ">Da Den Bu
            <div className="bg-blue-700 w-6 h-6 rounded-full flex justify-center items-center ml-4 text-white">
                <SiGhostery size={16}/>
            </div>
            </div>
            <div className="mt-2 flex items-center text-gray-500">
                by
                <div className="text-white ml-2">{CONTRACT_ADDRESS}</div>
            </div>
            <div className="mt-2 text-gray-500">
            다덴부란(.env란 "environment"의 약어)은 소프트웨어 개발에서 자주
            사용되는 파일 형식 중 하나입니다. 이 파일은 소프트웨어 개발자들이
            프로젝트에서 사용되는 환경 변수(environment variable)를 저장하는 데
            사용됩니다.
            </div>
            <div className="py-4 text-center flex ">
                <div>
                <div className="font-bold">{totalNft}</div>
                <div className="text-gray-500">총 NFT</div>
                </div>
                <div className="ml-4">
                <div className="font-bold">{mintedNft}</div>
                <div className="text-gray-500">발행된 NFT</div>
                </div>
                <div className="ml-4">
                <div className="font-bold">{myNft}</div>
                <div className="text-gray-500">내 NFT</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Intro;