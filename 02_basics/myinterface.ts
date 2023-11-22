interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googeId?: string;
  startTrial: () => string;
  startTrail2(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken?: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const jonathan: Admin = {
  dbId: 22,
  role: "admin",
  githubToken: "star@github",
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

// Differences between interfaces and types
// Interfaces can be reopened (add more properties too) and types can't
// Another reason is the syntax
