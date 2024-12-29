import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
  Req,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RefreshTokenRequest } from "../../payload/request/refresh-token.request";
import { SkipAuth } from "../../config/skip.auth";
import { CreateUserRequest } from "../../payload/request/users.request";
import { successResponse } from "../../common/dto/response.dto";
import {
  AuthLogoutRequest,
  AuthRequest,
} from "../../payload/request/auth.request";
import { FilesInterceptor } from "@nestjs/platform-express";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @SkipAuth()
  @Post("login")
  async login(@Body() authRequest: AuthRequest, @Req() req: Request) {
    const result = await this.authService.login(
      authRequest,
      req.headers["origin"]
    );

    return successResponse(result);
  }

  @SkipAuth()
  @Post("register")
  @UseInterceptors(FilesInterceptor("files"))
  async register(
    @Body() createUserRequest: CreateUserRequest,
    @UploadedFiles() files?: Express.Multer.File[]
  ) {
    const file = files && files.length > 0 ? files[0] : null;
    const result = await this.authService.registerUser(createUserRequest, file);
    return successResponse(result);
  }

  @SkipAuth()
  @Post("refresh-token")
  async refreshToken(@Body() refreshTokenRequest: RefreshTokenRequest) {
    return successResponse(
      await this.authService.refreshToken(refreshTokenRequest)
    );
  }

  @Post("logout")
  async logout(@Body() authLogoutRequest: AuthLogoutRequest) {
    await this.authService.logout(authLogoutRequest);
    return successResponse({ message: "Logged out successfully" });
  }

  @SkipAuth()
  @Post("forgot-password")
  async forgotPassword(@Body() emailRequest: { email: string }) {
    const result = await this.authService.forgotPassword(emailRequest.email);
    return successResponse(result);
  }

  @SkipAuth()
  @Post("verify-code")
  async verifyCode(@Body() verifyCodeRequest: { email: string; code: string }) {
    const result = await this.authService.verifyCode(verifyCodeRequest);
    return successResponse(result);
  }
}
