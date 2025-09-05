import { Counter } from '@/components/Counter/Counter';
import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <h1>Welcome Home!</h1>
      <p>This is the home page</p>
      <Counter />
      <Image src="/test.png" alt="test" width={400} height={300} />
      <Image
        src="https://picsum.photos/seed/picsum/300/300"
        alt="test"
        width={300}
        height={300}
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{
          width: '100%', // по умолчанию 100%
          height: 'auto',
          maxWidth: '50vw', // ограничим на больших экранах половиной вьюпорта
        }}
      />
    </main>
  );
}
