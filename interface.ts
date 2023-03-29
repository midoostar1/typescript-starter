interface MyUser {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //startTrial: () => string;
  startTrial(): string;
  getCoupon(couponName: string):number
}

const mido1: MyUser = {
  dbId: 22,
  email: "h@hmail",
  userId: 2233,
  githubToken: 'repo',
  startTrial: () => {
    return this.email;
  },
  getCoupon: (name:'more') => {
      return 10
  }
};


interface MyUser{
    githubToken: string
}

interface MyAdmin extends MyUser{
role: 'admin' | 'learner' | 'ta'
}