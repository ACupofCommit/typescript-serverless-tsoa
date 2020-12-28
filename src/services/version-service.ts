import { Version } from "../models/version";

export class VersionService {
  public get(): Version {
    return {
      node: process.version,
      app: process.env.TST_REVISION || "Unknown-revision",
    }
  }
}