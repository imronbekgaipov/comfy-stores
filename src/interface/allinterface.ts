export interface userData {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface featuredInt {
  data: {
    data: [
      {
        id: string;
        attributes: {
          title: string;
          image: string;
          price: string;
          company: string;
        };
      }
    ];
  };
  meta: {};
}

export interface singleData {
  data: {
    data: {
      attributes: {
        title: string;
        image: string;
        price: string;
        company: string;
        description: string;
        colors: string[];
      };
      id: number;
    };
  };
  amount?: number;
  meta?: {};
}
