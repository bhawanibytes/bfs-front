import AddressBox from "@/components/AddressBox";
import Searchbar from "@/components/SearchBar";

const HomeMobile = () => {
  return (
    <>
      <div className=' mx-5 '>
        <div>
          <div className='mt-5'>
            <AddressBox />
          </div>
          <div className='mt-5'>
            <Searchbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMobile;
