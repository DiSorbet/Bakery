import React from "react";
import ImgSkeleton from './ImgSkeleton'

type LazyImageProps = {
  setSwitchImg: React.Dispatch<React.SetStateAction<boolean>>;
  imgSet: { url: string }[];
  title: string;
  switchImg: boolean;
};

const LazyImage = ({
  setSwitchImg,
  imgSet,
  title,
  switchImg,
}: LazyImageProps) => {
const [isLoading, setIsLoading]=React.useState(true)
  return (
    <div rel="preload">
      {isLoading && <ImgSkeleton/>}
      <img
        onMouseEnter={() => setSwitchImg(true)}
        onMouseLeave={() => setSwitchImg(false)}
        src={imgSet[switchImg ? 1 : 0].url}
        alt={title}
        onLoad={()=>setIsLoading(false)}
      />
    </div>
  );
};

export default LazyImage;
