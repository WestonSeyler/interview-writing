let pack = {
    totalAmount: 100, // 红包总金额
    remainingAmount: 100, // 剩余金额
}


function getRandomAmount(min, max) {
    return Math.random() * (max - min)
}

function grabRedPacket(participant) {
    if (pack.remainingAmount <= 0) {
        return '没有红包了'
    }
    const amount = getRandomAmount(0.01, pack.remainingAmount)
    pack.remainingAmount -= amount
    console.log(`${participant}抢到了${amount.toFixed(2)}元`)
    // return amount
}

grabRedPacket('参与者A')
grabRedPacket('参与者B')
grabRedPacket('参与者C')
grabRedPacket('参与者D')
grabRedPacket('参与者E')
grabRedPacket('参与者F')
grabRedPacket('参与者G')