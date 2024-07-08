import Image from "next/image";

export default function Home() {
  return (
    <>
        <div className=" relative max-w-screen-lg mx-auto h-screen border-[16px] rounded-lg border-orange-400 px-4 py-4">
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-md w-[200px] h-[200px] border-2">

            </div>

        </div>
        <div className="flex flex-col justify-between items-center w-full gap-4 min-h-screen bg-[#9CDBA6] p-5">
        <div className="w-[150px] h-[150px] bg-[#468585] rounded-lg"></div>
        <div className="w-[150px] h-[150px] bg-[#468585] rounded-lg"></div>
          </div>
          <div className="w-full flex flex-col justify-center items-center h-screen bg-gradient-to-br to-[white] from-[red] via-[blue]">
           <h1 className="opacity-70 text-[30px] text-[salmon] font-extrabold">Gradient</h1>
           <p className="text-center uppercase leading-10 tracking-wide font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam
           </p>
            <p className="font-['tomato_grotesk']"> My name is Ankit Kumar Singh </p>

            </div>

            <div className="w-full h-screen bg-zinc-400 flex justify-center items-center">
                <div className="w-[200px] h-[200px] bg-[salmon] rounded-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ease-[cubic-bezier(0.33, 1, 0.68, 1)] duration-300 hover:scale-110 sm:w-[600px] md:bg-green-300">

                </div>
            </div>
    </>
  );
}
