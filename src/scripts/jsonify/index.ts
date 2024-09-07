import fs from "fs";

import {
  getModelJsonFixtureFilePath,
  type Jsonifier,
  Jsonifiers,
  type JsonifiableModel,
} from "~/database/fixtures";
import { pluralizeBrandModel } from "~/database/model";
import { db } from "~/database/prisma";

import { cli } from "~/scripts";

async function script() {
  const live = cli.getBooleanCliArgument("live", { defaultValue: false });

  await db.$transaction(async tx => {
    let key: JsonifiableModel;
    for (key in Jsonifiers) {
      const jsonifier = Jsonifiers[key] as Jsonifier<typeof key>;

      cli.info(`Generating fixtures for model '${key}'...`);
      const data = await jsonifier.data(tx);
      const jsonified = data.map(d => jsonifier.jsonify(d));

      const [dir, filename] = getModelJsonFixtureFilePath(key, {
        live,
      });

      if (!fs.existsSync(dir)) {
        cli.info(`Directory ${dir} does not exist, creating...`);
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFile(
        filename,
        JSON.stringify({ [pluralizeBrandModel(key)]: jsonified }),
        "utf-8",
        err => {
          if (err) {
            cli.error(`There was an error writing the fixtures to file ${filename}: \n${err}`);
          } else {
            cli.info(`Successfully saved products fixtures to file ${filename}.`);
          }
        },
      );
    }
  });
}

cli.runScript(script);
