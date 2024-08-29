import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  //! Danh sách các ngôn ngữ được hỗ trợ
  locales: ["en", "vi"],

  //! Cài đặt ngôn ngữ mặc định
  defaultLocale: "en",
});

export const config = {
  // ! Chỉ khớp các tên đường dẫn được quốc tế hóa
  matcher: ["/", "/(vi|en)/:path*"],
};
