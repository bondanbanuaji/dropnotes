import Link from 'next/link';

export default function IndexPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Link
      href="/Homepage"
      className="text-black hover:text-blue-500">
        Ini halaman buat ke Homepage bro
      </Link>
    </div>
  );
}