import doge from '@/assets/images/doge.png';
import Image from 'next/image';

export default function Modal() {
  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center bg-[rgb(0,0,0,0.2)]"
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="p-6 space-y-6">
            <Image
              src={doge}
              alt="doge"
              className="m-auto"
              width={200}
              height={200}
            />
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Dogecoin est une crypto-monnaie avec une image du chien Shiba Inu
              du mème « Doge » comme logo. Présenté comme une blague le 6
              décembre 2013, le Dogecoin a rapidement développé sa propre
              communauté en ligne et a atteint une capitalisation de 60 millions
              de dollars en janvier 2014
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
