import Image from "next/image"
import Link from "next/link"
import HeroButton from "./HeroButton"

export default function HeroBox() {
    return (
            <div className="bg-black p-10 rounded-xl items-center max-w-xl">
                <div className="mb-10 flex justify-center">
                    <Image 
                        src="/images/ethchi_banner.jpg" 
                        alt="ethchi banner" 
                        width={200} 
                        height={160}
                    />
                </div>
                <h2 className="text-xl text-white">
                    Three days of building bridges between web3 builders, creators, traditional businesses, financial experts, and policymakers.
                </h2>
                <h1 className="text-3xl text-white text-center mt-10 font-bold">September 15-17, 2023</h1>
                <ul className="flex justify-center p-10">
                    <li> 
                        <HeroButton 
                            url="https://7tjiyjbn20b.typeform.com/ETHChicagoAtt" 
                            label="I want to attend"
                        />
                    </li>
                    <li> 
                        <HeroButton 
                            url="https://7tjiyjbn20b.typeform.com/ETHChicagoVol" 
                            label="I want to volunteer"
                        />
                    </li>
                    <li> 
                        <HeroButton 
                            url="https://7tjiyjbn20b.typeform.com/ETHChicagoPart" 
                            label="I want to partner"
                        />
                    </li>
                </ul>
            </div> 
    )
}


