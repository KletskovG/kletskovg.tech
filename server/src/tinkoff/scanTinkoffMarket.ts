import { TinkoffTicker } from "db/models/tinkoffTicker";
import { createTinkoffClient } from "./createTinkoffClient";
import { log } from "logger/logger";
import type { ITinkoffTickerModel } from "types/tinkoff/ITinkoffTickerModel";
import { getSecondsTimestamp } from "utils/getSecondsTimestamp";

export async function scanTinkoffMarket() {
  const tinkoffClient = createTinkoffClient();

  if (!tinkoffClient) {
    return;
  }

  const tinkoffShareData = await tinkoffClient.instruments.shares({ instrumentStatus: 1 });

  for (let i = 0; i < tinkoffShareData.instruments.length; i++) {
    const share = tinkoffShareData.instruments[i];

    scanShare(share.ticker);
  }

  log("Important", `Tinkoff shares scanning | ${tinkoffShareData.instruments.length}`);
}

async function scanShare(shareName: string) {
  const shareInfo = await TinkoffTicker.findOne({ticker: shareName});
  console.log(shareInfo);
  if (shareInfo) {
    return;
  }

  log("Important", `Found new Tinkoff ticker: ${shareName}`);

  const timestamp = getSecondsTimestamp();
  const tinkoffShare: ITinkoffTickerModel = {
    ticker: shareName,
    timestamp,
    createdTimestamp: timestamp,
  };

  TinkoffTicker.create(tinkoffShare);
}
