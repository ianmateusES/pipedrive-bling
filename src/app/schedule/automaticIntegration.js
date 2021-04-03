import schedule from 'node-schedule';
import logger from '../../utils/logger';
import PipedriveService from '../services/PipedriveService';
import CreateDealBlingService from '../services/CreateDealBlingService';

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(0, 6)];
rule.hour = 23;
rule.minute = 55;

const pipedrive = new PipedriveService();
const createDealBling = new CreateDealBlingService();

schedule.scheduleJob(rule, async () => {
  const deals = await pipedrive.execute({ status: null });

  await createDealBling.execute({ deals });
  logger.info('Successful automatic integration');
});
