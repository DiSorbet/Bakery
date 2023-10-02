export type BentoProps = {
    cream: string[];
    biscuit: string[];
    setBento: React.Dispatch<React.SetStateAction<{
      id: string;
      title: string;
      price: number;
      biscuit: string;
      cream: string;
      imgSet: {
          url: string;
      };
      category: string;
  }>>
  };