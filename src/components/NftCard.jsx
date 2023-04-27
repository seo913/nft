import { SiGhostery } from "react-icons/si";
import { Link } from "react-router-dom";


function NftCard({tokenId, metadata, mintedNft}){
    return(
        <div className=" rounded-2xl bg-gray-300 pb-4 relative">
            {parseInt(mintedNft) < tokenId && (
            <div className="absolute bg-black w-full h-full bg-opacity-50 rounded-2xl flex justify-center items-center text-4xl font-bold">
                Not Minted.
            </div>
            )}
            <img className=" rounded-t-2xl" src={metadata.image} alt={metadata.name} />
            <div className="mt-4 text-xl font-bold flex items-center px-4 text-blue-500">
                Da Den Bu
                <div className="bg-white w-6 h-6 rounded-full flex justify-center items-center ml-2">
                    <SiGhostery size={18} />
                </div>
            </div>
            <div className="mt-4 text-2xl font-bold px-4 text-blue-500"># {tokenId}</div>
            <div className="mt-4 text-xl flex justify-end px-4">
                <Link to={`${tokenId}`}>
                <button disabled={parseInt(mintedNft) < tokenId} className="bg-gray-500 text-blue-500 px-4 py-2 rounded-xl hover:bg-gray-700">
                    Detail
                </button>
                </Link>

            </div>
        </div>
    )
}
export default NftCard;