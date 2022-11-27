import Image from "next/image"

export default function Images({imageSrc}:{imageSrc: any}){
    return <Image src={imageSrc} width={80} height={80} alt="image of the clients"/>
}