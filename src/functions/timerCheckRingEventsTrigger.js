const { app } = require('@azure/functions');

app.timer('timerCheckRingEventsTrigger', {
    schedule: '30 * * * * *',
    handler: (myTimer, context) => {
        context.log('Timer function processed request.');
    }
});
