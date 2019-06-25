export class DataTem {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public rewards: Rewards[],
        public currency: string,
        public amount: number,
        public rewardsPresent: boolean
    ){}
}
interface Rewards {
    currency: string;
    amount: number;
  }
