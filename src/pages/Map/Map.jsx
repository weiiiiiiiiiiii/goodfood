import Footer from '../../components/footer';
import Ham from '../../components/Ham';
import Header from '../../components/header';
import MapComponent from './MapComponent';


export default function Map() {
  return (
    <div className='bg-[#F3EBE6]'>
      <Header
        title="地圖探索"
      />
      <Ham />
      <div className='p-10 md:p-20'>
        <h1 className="text-2xl font-bold mb-4 text-left">台北市大安區臥龍街5號</h1>
        <hr className='w-full py-5' />
        <div className='px-5 md:px-20'>
          <MapComponent />
        </div>
        <div className='p-5 md:p-20 py-10'>
          <img src="/Map.PNG" alt="" className='w-full h-[250px] md:h-[600px]'/>
        </div>


      </div>


      <Footer />
    </div>
  );
}


