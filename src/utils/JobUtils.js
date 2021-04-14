const fetch = require('node-fetch');
const JobController = require('../controllers/JobController')

const JobUtils = {
    remainingDays(job) {
        // cálculo de tempo restante
        const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed()

        const createdDate = new Date(job.created_at)
        const dueDay = createdDate.getDate() + Number(remainingDays)
        const dueDateInMs = createdDate.setDate(dueDay)

        const timeDiffInMs = dueDateInMs - Date.now()
        // transformar milli em dias
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = Math.ceil(timeDiffInMs / dayInMs)

        // restam x dias
        return dayDiff
    },
    
    calculateBudget: (job, valueHour) => valueHour * job['total-hours'],
    
    async data() {
        const jobData = await JobController.show().then(res => {
          return res[job.budget].toFixed(2);
        }).then(data => {
          return data;
        })
       
        return jobData;
    
      },
    async url() {
        const response = await fetch(`https://economia.awesomeapi.com.br/USD-BRL/`);
        const data = await response.json();
    
        let currentValue = await JobUtils.data() / data[0].high;
    
        return currentValue.toFixed(2);
      }

}

module.exports = JobUtils;