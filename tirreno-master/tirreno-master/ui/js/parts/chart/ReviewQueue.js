import {BaseLineChart} from './BaseLine.js?v=2';

export class ReviewQueueChart extends BaseLineChart {
    getSeries() {
        return [
            this.getDaySeries(),
            this.getSingleSeries('Whitelisted', 'green'),
            this.getSingleSeries('On review', 'yellow'),
            this.getSingleSeries('Blacklisted', 'red'),
        ];
    }
}
