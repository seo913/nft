import { SiGhostery } from "react-icons/si";
import { CONTRACT_ADDRESS } from "../web3.config";
const ranNum = Math.floor(Math.random()*20) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

function Intro({totalNft,mintedNft,myNft}){

    return(
        <div className="bg-gradient-to-b from-transparent to-red-600 to-70% pt-10 via-orange-300 via-10% ">
            <div className="max-w-screen-xl mx-auto px-4 relative">
            <div className="flex animate-slider">
            {[1,2,3,4,5,6,7].map((v,i)=>{
                return(
                    <div key={i} className="mr-4">
                        <img  src={`${process.env.REACT_APP_IMAGE_URL}/${i+1}.png`} alt="NFT" />
                        </div>
                )
            })

            }    
            
            </div>
            
            <div className="mt-2 flex items-center text-white">
                by
                <div className="text-white ml-2">{CONTRACT_ADDRESS}</div>
            </div>
            <div className="mt-2 text-white">
            캠핑 만세 만만세!!
            </div>
            <div className="py-4 text-center flex ">
                <div>
                <div className="font-bold">{totalNft}</div>
                <div className="text-white">총 NFT</div>
                </div>
                <div className="ml-4">
                <div className="font-bold">{mintedNft}</div>
                <div className="text-white">발행된 NFT</div>
                </div>
                <div className="ml-4">
                <div className="font-bold">{myNft}</div>
                <div className="text-white">내 NFT</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Intro;