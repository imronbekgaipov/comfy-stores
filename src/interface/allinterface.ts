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

export interface allData {
  data: {
    data: [
      {
        id: number;
        attributes: {
          title: string;
          company: string;
          description: string;
          featured: false;
          createdAt: string;
          updatedAt: "2023-08-10T10:04:29.084Z";
          publishedAt: string;
          category: string;
          image: string;
          price: string;
          shipping: true;
          colors: string[];
        };
      }
    ];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  };
}
