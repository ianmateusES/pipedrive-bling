import schedule from 'node-schedule';
import logger from '../../utils/logger';
import CreateTotalDayDealService from '../services/CreateTotalDayDealService';

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(0, 6)];
rule.hour = 23;
rule.minute = 55;
const createTotalDayDeal = new CreateTotalDayDealService();

schedule.scheduleJob(rule, () => {
  createTotalDayDeal.execute();
  logger.info('Record of Deals of the Day, created');
});
