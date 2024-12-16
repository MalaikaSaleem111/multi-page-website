import Link from "next/link"
export default function Forms(){
    return(
        <div className="h-96 bg-white my-10">
            <h1 className="text-5xl font-semibold text-center uppercase">Enter Your Details</h1>
            <div>
            <form className="mt-10 flex gap-5 justify-center items-center flex-col">
              <input type="text" className="p-2 rounded-2xl w-2/5 border border-slate-800" placeholder="Enter Your Name"/>
              <input type="email" required className="p-2 rounded-2xl w-2/5 border border-slate-800" placeholder="Enter Your Email"/>
              <input type="password" required className=" p-2 rounded-2xl w-2/5 border border-slate-800" placeholder="Enter Your Password"/>

              <Link href="/thankyou"><button className=" py-4  px-8 rounded-lg bg-blue-800 text-white">Place Your Order</button></Link>

            </form>
            </div>

        </div>
    )
}