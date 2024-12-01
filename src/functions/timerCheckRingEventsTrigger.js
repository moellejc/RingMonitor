const { app } = require("@azure/functions");
import { RingApi } from "ring-client-api";

app.timer("timerCheckRingEventsTrigger", {
  schedule: "*/30 * * * * *",
  handler: async (myTimer, context) => {
    context.log("Start Ring Events Check");
    context.log("Connect to RingAPI: " + process.env.RING_REFRESH_TOKEN);
    const ringApi = new RingApi({
      refreshToken: process.env.RING_REFRESH_TOKEN,
    });
    context.log("Get Ring Devices");
    let devices = await ringApi.fetchRingDevices();
    context.log(devices.allCameras);
    context.log("End Ring Events Check");
  },
});
