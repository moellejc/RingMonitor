const { app } = require("@azure/functions");
import { RingApi } from "ring-client-api";

app.timer("timerCheckRingEventsTrigger", {
  schedule: "*/30 * * * * *",
  handler: async (myTimer, context) => {
    context.log("Timer function processed request to check for Ring Events.");

    const ringApi = new RingApi({
      refreshToken: process.env.RING_REFRESH_TOKEN,
    });

    let devices = await ringApi.fetchRingDevices();
    context.log(devices.allCameras);
  },
});
