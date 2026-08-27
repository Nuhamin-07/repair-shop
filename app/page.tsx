import Link from "next/link";

export default function Home() {
  return (
    <div
      className="bg-black bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/home-img.jpg')",
      }}
    >
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-90 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">
            NG's Computers <br /> Repair Shop
          </h1>
          <address>Addis Ababa, Ethiopia</address>
          <p>Open daily: 9am - 5pm</p>
          <Link href="tel:091020102" className="hover:underline">
            091020102
          </Link>
        </div>
      </main>
    </div>
  );
}
