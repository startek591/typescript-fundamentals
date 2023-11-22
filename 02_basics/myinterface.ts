interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googeId?: string;
  startTrial: () => string;
  startTrail2(): string;
  getCoupon(couponname: string, value: number): number;
}

const jonathan: User = {
  dbId: 22,
  email: "j@gmail.com",
  userId: 2211,
  startTrial: () => {
    return "trial started";
  },
  startTrail2: () => {
    return "2";
  },
  getCoupon: (name: "hitesh10", off: 10) => {
    return 10;
  },
};

jonathan.email = "j@hc.com";
