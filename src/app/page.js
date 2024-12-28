import Image from "next/image";
import AskList from "./components/main/AskList";

export default function Home() {
  return (
    <>
    <header></header>
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <section className=''>
        <Image
          src="/images/top.jpg"
          alt="top"
          layout="responsive"
          width={1200}
          height={800}
          className="mb-2"
        />
        <div className="max-w-full h-fit px-5 py-3 border-blue-500 border-2 rounded-md flex flex-col sm:flex-row justify-center items-center gap-2 ">
          <span>2024.12.22</span>
          <span>김**</span>
          <span>010-2****-****</span>
          <span className="bg-black text-white">신청완료</span>
        </div>
      </section>
      <section  className="w-full max-w-4xl">
        <AskList />
      </section>
      <section className="w-full max-w-4xl flex flex-col gap-2">
        <Image
          src="/images/main1.jpg"
          alt="main1"
          layout="responsive"
          width={1200}
          height={800}
        />
        <Image
          src="/images/main2.jpg"
          alt="main1"
          layout="responsive"
          width={1200}
          height={800}
        />
        <Image
          src="/images/foot.jpg"
          alt="main1"
          layout="responsive"
          width={1200}
          height={800}
        />
      </section>
    </main>
    <footer></footer>
  </>
  );
}
