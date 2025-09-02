import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <h1>Welcome Home!</h1>
      <p>This is the home page</p>
      <Image src="/test.png" alt="test" width={400} height={300} />
      <Image
        src="https://picsum.photos/seed/picsum/300/300"
        alt="test"
        width={300}
        height={300}
      />
    </main>
  );
}
