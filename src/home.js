import React from "react";
import Product from "./component/product";
import "./home.css";
import banner from "./images/banner.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img src={banner} class="bannerimg"></img>
        <div class="home_row">
          <Product
           id={1001}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={23.12}
            image="https://th.bing.com/th/id/R.9de82ef2da08008a74aa3afbec9f3cf9?rik=zaas85eGaea9BQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-T-d3JPMr-Uk%2fUPshLuidy6I%2fAAAAAAAAFbU%2fvOiHd0qgnC4%2fs1600%2flean-startup_book-cover.jpeg&ehk=O90jlIAsVo0HEm3VJD7I%2b0%2fbWRp8HxsmQwJdugopPLU%3d&risl=&pid=ImgRaw&r=0"
            rating={2}
          />
          <Product
          id={1002}
            title="
     Roll over image to zoom in6 VIDEOS Bajaj Rex 500W Mixer Grinder with Nutri-Pro Feature, 3 Jars, black"
            price={43.12}
            image="https://th.bing.com/th/id/OIP.yeIqwZNi_26QydJc_dw5lwHaHC?pid=ImgDet&rs=1"
            rating={3}
          />
        </div>
        <div class="home_row">
          <Product
          id={1003}
            title="
     Roll over image to zoom in Noise ColorFit Pro 2 Full Touch Control Smart Watch with 35g Weight (Jet Black)"
            price={33.12}
            image="https://th.bing.com/th/id/R.f09b3bd023e5541c2ec17f074eb2417c?rik=XvfMWZAeRbSwYQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fwatches%2fwatches_PNG9854.png&ehk=RMhK8XoMXeVv04tUPiAP9iAVKYidGDknaOd22ZgPTGQ%3d&risl=&pid=ImgRaw&r=0"
            rating={3}
          />
          <Product
          id={1004}
            title="Echo (4th Gen, 2020 release)Premium sound powered by Dolby and Alexa (Black)"
            price={43.12}
            image="https://th.bing.com/th/id/R.7125ebbfe3091e2f7b58949cf3a1a0cd?rik=aKA2Blq8gbZd5w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2famazon-alexa-png-an-amazon-account-is-required-log-in-with-amazon-648.png&ehk=8plRlcVUtebCMVj09%2bn6qFoXwiKdMU6wiQPeZ7XgcIs%3d&risl=&pid=ImgRaw&r=0"
            rating={3}
          />
          <Product
          id={1005}
            title="OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)"
            price={13.12}
            image="https://th.bing.com/th/id/OIP.6Zgp11UD53yqEW4QRbbsMgHaHa?pid=ImgDet&rs=1"
            rating={3}
          />
        </div>
        <div class="home_row">
          <Product
          id={1006}
            title="iFFALCON 80 cm (32 inches) HD Ready Android Smart LED TV 32F2A (Black) (2021 Model) | With Built-in Voice Assistant\\iFFALCON 80 cm (32 inches) HD Ready Android Smart LED TV 32F2A (Black) (2021 Model) | With Built-in Voice Assistant"
            price={330.12}
            image="https://www.lg.com/hk_en/images/tv/md05810311/gallery/medium02.jpg"
            rating={3}
          />
        
        </div>
        <div class="home_row">
        <Product
          id={1003}
            title="HP 14s Laptop 14(35.56cms)(Ryzen 5/8GB/512 SSD/Windows 10 Home)"
            price={33.12}
            image="https://m.media-amazon.com/images/I/41645YiVx2L.jpg"
            rating={3}
          />
          <Product
          id={1004}
            title="boAt Rockerz 255 Pro+ in-Ear Earphones"
            price={43.12}
            image="https://m.media-amazon.com/images/I/615pU4AXg4L._SL1500_.jpg"
            rating={3}
          />
          <Product
          id={1005}
            title="boAt Airdopes 441 TWS Ear-Buds, Type-C Port(Raging Red)"
            price={13.12}
            image="https://m.media-amazon.com/images/I/51lEIy51L6L._SL1500_.jpg"
            rating={3}
          />
           <Product
          id={1005}
            title="OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)"
            price={13.12}
            image="https://th.bing.com/th/id/OIP.6Zgp11UD53yqEW4QRbbsMgHaHa?pid=ImgDet&rs=1"
            rating={3}
          />
        </div>
        <div class="home_row">
        <Product
          id={1003}
            title="
     Roll over image to zoom in Noise ColorFit Pro 2 Full Touch Control Smart Watch with 35g Weight (Jet Black)"
            price={33.12}
            image="https://th.bing.com/th/id/R.f09b3bd023e5541c2ec17f074eb2417c?rik=XvfMWZAeRbSwYQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fwatches%2fwatches_PNG9854.png&ehk=RMhK8XoMXeVv04tUPiAP9iAVKYidGDknaOd22ZgPTGQ%3d&risl=&pid=ImgRaw&r=0"
            rating={3}
          />
          <Product
          id={1004}
            title="Echo (4th Gen, 2020 release)Premium sound powered by Dolby and Alexa (Black)"
            price={43.12}
            image="https://th.bing.com/th/id/R.7125ebbfe3091e2f7b58949cf3a1a0cd?rik=aKA2Blq8gbZd5w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2famazon-alexa-png-an-amazon-account-is-required-log-in-with-amazon-648.png&ehk=8plRlcVUtebCMVj09%2bn6qFoXwiKdMU6wiQPeZ7XgcIs%3d&risl=&pid=ImgRaw&r=0"
            rating={3}
          />
          <Product
          id={1005}
            title="OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)"
            price={13.12}
            image="https://th.bing.com/th/id/OIP.6Zgp11UD53yqEW4QRbbsMgHaHa?pid=ImgDet&rs=1"
            rating={3}
          />
        
        </div>
      </div>
    </div>
  );
};

export default Home;
