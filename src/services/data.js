// 20220215133826
// https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true

const marketPrice = {
    "status": "ok",
    "name": "Market Price (USD)",
    "unit": "USD",
    "period": "day",
    "description": "Average USD market price across major bitcoin exchanges.",
    "values": [
        {
            "x": 1631923200,
            "y": 47263.6
        },
        {
            "x": 1632009600,
            "y": 48259.45
        },
        {
            "x": 1632096000,
            "y": 47249.38
        },
        {
            "x": 1632182400,
            "y": 42901.56
        },

    ]
}

// 20220215134253
// https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true

const avgBlockSize = {
    "status": "ok",
    "name": "Average Block Size",
    "unit": "MB",
    "period": "day",
    "description": "The average block size in MB.",
    "values": [
        {
            "x": 1631923200,
            "y": 0.955009993548387
        },
        {
            "x": 1632960000,
            "y": 1.2539551754385967
        },
        {
            "x": 1633046400,
            "y": 1.237001442857143
        },
        {
            "x": 1633132800,
            "y": 0.9429064361702131
        },
    ]
}


// 20220215134413
// https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true

const tradeVolume = {
    "status": "ok",
    "name": "USD Exchange Trade Volume",
    "unit": "Trade Volume (USD)",
    "period": "day",
    "description": "The total USD value of trading volume on major bitcoin exchanges.",
    "values": [
        {
            "x": 1631923200,
            "y": 233662730.952
        },
        {
            "x": 1632009600,
            "y": 171820050.213
        },
        {
            "x": 1632096000,
            "y": 135623202.8706
        },
        {
            "x": 1632182400,
            "y": 605141090.3304
        },
    ]
}



// https://blockchain.info/tobtc?currency=USD&value=1

const rate = 0.00002262

export const dataService = {
    tradeVolume,
    avgBlockSize,
    marketPrice,
    rate

}
