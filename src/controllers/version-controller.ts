import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse } from "tsoa"
import { Version } from "../models/version";
import { VersionService } from "../services/version-service"

@Route("version")
export class VersionController extends Controller {
  @Get("/")
  public async getVersion(): Promise<Version> {
    console.log('version')
    return new VersionService().get()
  }

  @Get("/echo/{message}")
  public async echo(@Path() message: string): Promise<{echo: string}> {
    console.log(message)
    return { echo: message }
  }
}