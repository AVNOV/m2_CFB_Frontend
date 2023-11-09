import Image from 'next/image';

import arrow from '../../../assets/icons/arrow.svg';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="pl-2 w-fit transition-transform active:scale-95"
    >
      <Image
        className="w-4 object-contain rotate-90"
        src={arrow}
        alt="back button"
      />
    </button>
  );
}
