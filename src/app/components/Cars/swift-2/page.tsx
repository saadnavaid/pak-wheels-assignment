import Link from "next/link"

export default function Swift2 () {
    return(
    <div className="bg-gray-100 flex flex-col min-h-screen">
        <div className="text-5xl text-center font-bold text-black py-4">
            Suzuki Swift GLX CVT 2024 Price in Pakistan, Images, Reviews & Specs </div>
        <div className="text-center">
            <img src="/02 swift.png" alt="Suzuki Swift" width={250} height={250} className="object-cover mx-auto"/>
        </div>
        <div className="flex justify-start items-end mx-10"> 
            <span className="bg-zinc-200 rounded-lg h-6 align-middle font-semibold px-2 text-wrap"> 
                <Link href="swift">{"< "}Preview</Link></span>
        </div>
        <div className="flex flex-row py-3 justify-center items-center mx-auto space-x-5 h-20 text-xs">
            <button className="items-center bg-blue-700 text-white rounded h-7 px-4 text-nowrap">Book a test Drive</button>
            <button className="items-center bg-white text-blue-700 rounded border border-blue-700 h-7 px-2 text-nowrap">Request Bank Finance</button>
            <button className="items-center bg-white text-blue-700 rounded border border-blue-700 h-7 px-2 text-nowrap">Visit Place</button>
            <button className="items-center bg-white text-blue-700 rounded border border-blue-700 h-7 px-2 text-nowrap">Car Inspection</button>
        </div>
        <div className="text-2xl text-black font-light mx-auto">Vehicle Description</div>
        <div className="text-black text-sm mx-auto space-x-4 pt-2">
            <span className="font-bold mx-1">Number of Doors: </span> 4
            <span className="font-bold mx-1">Engine: </span> 1000 CC 
            <span className="font-bold mx-1">Condition: </span> 8.5 / 10
            <span className="font-bold mx-1">Driven: </span> 9,500 KM 
            <span className="font-bold mx-1">Suspension Type: </span> Soft Suspension
        </div>
        <div className="text-black flex place-items-start text-sm mx-80 space-x-4 pt-3">
            <span className="font-bold mx-1">Avg: </span>14 Km per ltr
            <span className="font-bold mx-1">Transmission: </span>Automatic 
            <span className="font-bold mx-1">Fuel Type: </span>Petrol
        </div>
        <div className="text-center mx-auto text-2xl text-green-500 font-medium py-5">Rs. 48,00,000/-</div>
        <button className="rounded bg-blue-700 text-white text-xs mx-auto h-7 px-3">
        <Link href="../Checkout">Make Payment</Link></button>
    </div>

    )
}