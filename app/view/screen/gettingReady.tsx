import logo from '~/view/share/logo.svg';

import Paragraph from '../component/paragraph';

export default function GettingReady() {
  return (
    <main className="flex flex-col justify-center
    max-w-2xl m-auto mt-16">
      <h1 className='font-bold text-xl text-center'>準備中</h1>
      <img src={logo} className="mt-16" />
    </main>
  );
}