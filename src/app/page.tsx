import Banner from '@/components/banner';
import Welcome from '@/components/ui/Welcome';
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <Banner />
      <Welcome />
      {/* <Ads/> */}
    </div>
  );
}
