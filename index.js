const express = require('express')
const timber = require('../timber_node/dist')

const app = express()

const transport = new timber.transports.HTTPS(process.env.TIMBER_KEY);
timber.install(transport);

// This will log to the Timber dashboard
console.log(`hello there! Listening on ${process.env.PORT}`)
console.warn("Payment rejected", {
  event: {
    payment_rejected: { customer_id: "abcd1234", amount: 100, reason: "Card expired" }
  }
});

app.use(timber.middlewares.express())
app.listen(process.env.PORT)

