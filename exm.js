import { Exm } from "@execution-machine/sdk";
import * as dotenv from "dotenv";

dotenv.config();

const APIKEY = process.env.EXM_PK;

export const exmInstance = new Exm({ token: APIKEY });
