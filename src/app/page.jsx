import Image from "next/image";
import AskList from "./components/main/AskList";
import ApplyList from "./components/main/ApplyList";
import FormContainer from "./components/main/FormContainer";

export default function Home() {
  return (
    <>
      <header></header>
      <main className="flex flex-col items-center justify-center min-h-screen px-2">
        <section className="w-full max-w-4xl">
          <Image
            src="/images/top.jpg"
            alt="top"
            layout="responsive"
            width={1500}
            height={800}
            className="mb-2"
          />
        </section>
        <FormContainer />
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
