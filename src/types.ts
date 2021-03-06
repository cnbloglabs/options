type CodeTheme = 'atomOneDark' | 'atomOneLight' | 'github'
type Page = 'all' | 'post' | 'index'
type Agent = 'desktop' | 'pad' | 'phone'
type Audio = Array<{
  name: string
  artist: string
  url: string
  cover: string
  lrc: string
}>
interface Lrc {
  enable: boolean
  type: 1 | 3
  color: string
}
interface Link {
  name: string
  link: string
}
interface ThemeOptions {
  name: string
  color: string
  avatar: string
  headerBackground: string
}
interface BackgroundOptions {
  enable: boolean
  value: string
  opacity: number
  repeat: boolean
}
interface BarragesOptions {
  enable: boolean
  opacity: number
  fontSize: string
  colors: string[]
  barrages: string[]
  indexBarrages: string[]
  postPageBarrages: string[]
}
interface CatalogOptions {
  enable: boolean
  position: 'left' | 'right'
}
interface ChartsOptions {
  enable: boolean
  labels: string[]
  datasets: Array<Object>
}
interface ClickEffectsOptions {
  enable: boolean
  colors: string[]
  size: number
  maxCount: number
}
interface CodeCopyOptions {
  enable: boolean
}
interface CodeHighlightOptions {
  dark: CodeTheme
  light: CodeTheme
}
interface CodeLangOptions {
  enable: boolean
}
interface CodeLinenumbersOptions {
  enable: boolean
}
interface DonationOptions {
  enable: boolean
  qrcodes: string[]
}
interface EmojiOptions {
  enable: boolean
  buttonIcon: string
  emojiList: string[]
}
interface LinksOptions {
  enable: boolean
  value: Array<Link>
}
interface ImagePreviewOptions {
  enable: boolean
}
interface Live2dOptions {
  enable: boolean
}
interface LockScreenOptions {
  enable: boolean
  background: string
  strings: string[]
}
interface DarkModeOptions {
  enable: boolean
  darkDefault: boolean
  autoDark: boolean
  autoLight: boolean
}
interface MusicPlayerOptions {
  enable: boolean
  page: Page
  agent: Agent
  autoplay: boolean
  volume: number
  lrc: Lrc
  audio: Audio
}
interface NotationOptions {
  enable: boolean
}
interface NoticeOptions {
  enable: boolean
}
interface PostBottomImageOptions {
  enable: boolean
  img: string
  height: string
}
interface LicenseOptions {
  enable: boolean
  license: boolean
  licenseName: string
  licenseLink: string
  contents: string[]
}
interface PostTopImageOptions {
  enable: boolean
  fixed: boolean
  imgs: string[]
}
interface QrcodeOptions {
  enable: boolean
  img: string
  desc: string
}
interface SignatureOptions {
  enable: boolean
  contents: string[]
}
interface ToolsOptions {
  initialOpen: boolean
  mobileAutoClose: boolean
}
interface GithubOptions {
  enable: boolean
  color: string
  url: string
}
interface GiteeOptions {
  enable: boolean
  color: string
  url: string
}
interface PostListImageOptions {
  enable: boolean
  images: string[]
}
interface WebsiteTagOptions {
  enable: boolean
  title: string
  favicon: string
}
interface CodeTrafficLightOptions {
  enable: boolean
}

/**
 * ??????????????????
 */
export type UseThemeOptions = (
  options: Partial<ThemeOptions>
) => ThemeOptions
/**
 * ????????????
 */
export type UseBackgroundOptions = (
  options: Partial<BackgroundOptions>
) => BackgroundOptions
/**
 * ????????????
 */
export type UseBarragesOptions = (
  options: Partial<BarragesOptions>
) => BarragesOptions
/**
 * ??????????????????
 */
export type UseCatalogOptions = (
  options: Partial<CatalogOptions>
) => CatalogOptions
/**
 * ????????????
 */
export type UseChartsOptions = (
  options: Partial<ChartsOptions>
) => ChartsOptions
/**
 * ??????????????????
 */
export type UseClickEffectsOptions = (
  options: Partial<ClickEffectsOptions>
) => ClickEffectsOptions
/**
 * ?????????????????????
 */
export type UseCodeCopyOptions = (
  options: Partial<CodeCopyOptions>
) => CodeCopyOptions
/**
 * ???????????????????????????
 */
export type UseCodeHighlightOptions = (
  options: Partial<CodeHighlightOptions>
) => CodeHighlightOptions
/**
 * ?????????????????????
 */
export type UseCodeLangOptions = (
  options: Partial<CodeLangOptions>
) => CodeLangOptions
/**
 * ?????????????????????
 */
export type UseCodeLinenumbersOptions = (
  options: Partial<CodeLinenumbersOptions>
) => CodeLinenumbersOptions
/**
 * ????????????
 */
export type UseDonationOptions = (
  options: Partial<DonationOptions>
) => DonationOptions
/**
 * ??????????????????
 */
export type UseEmojiOptions = (
  options: Partial<EmojiOptions>
) => EmojiOptions
/**
 * ?????????????????????
 */
export type UseLinksOptions = (
  options: Partial<LinksOptions>
) => LinksOptions
/**
 * ??????????????????
 */
export type UseImagePreviewOptions = (
  options: Partial<ImagePreviewOptions>
) => ImagePreviewOptions
/**
 * live2d ??????
 */
export type UseLive2dOptions = (
  options: Partial<Live2dOptions>
) => Live2dOptions
/**
 * ????????????
 */
export type UseLockScreenOptions = (
  options: Partial<LockScreenOptions>
) => LockScreenOptions
/**
 * ??????????????????
 */
export type UseDarkModeOptions = (
  options: Partial<DarkModeOptions>
) => DarkModeOptions
/**
 * ?????????????????????
 */
export type UseMusicPlayerOptions = (
  options: Partial<MusicPlayerOptions>
) => MusicPlayerOptions
/**
 * ????????????
 */
export type UseNotationOptions = (
  options: Partial<NotationOptions>
) => NotationOptions
/**
 * ????????????
 */
export type UseNoticeOptions = (
  options: Partial<NoticeOptions>
) => NoticeOptions
/**
 * ????????????????????????
 */
export type UsePostBottomImageOptions = (
  options: Partial<PostBottomImageOptions>
) => PostBottomImageOptions
/**
 * ????????????
 */
export type UseLicenseOptions = (
  options: Partial<LicenseOptions>
) => LicenseOptions
/**
 * ????????????????????????
 */
export type UsePostTopImageOptions = (
  options: Partial<PostTopImageOptions>
) => PostTopImageOptions
/**
 * ???????????????
 */
export type UseQrcodeOptions = (
  options: Partial<QrcodeOptions>
) => QrcodeOptions
/**
 * ??????????????????
 */
export type UseSignatureOptions = (
  options: Partial<SignatureOptions>
) => SignatureOptions
/**
 * ???????????????
 */
export type UseToolsOptions = (
  options: Partial<ToolsOptions>
) => ToolsOptions
/**
 * Github ??????
 */
export type UseGithubOptions = (
  options: Partial<GithubOptions>
) => GithubOptions
/**
 * Gitee ??????
 */
export type UseGiteeOptions = (
  options: Partial<GiteeOptions>
) => GiteeOptions
/**
 * ????????????????????????
 */
export type UsePostListImageOptions = (
  options: Partial<PostListImageOptions>
) => PostListImageOptions
/**
 * ??????????????????
 */
export type UseWebsiteTagOptions = (
  options: Partial<WebsiteTagOptions>
) => WebsiteTagOptions
/**
 * ??????????????????
 */
export type UseCodeTrafficLightOptions = (
  options: Partial<CodeTrafficLightOptions>
) => CodeTrafficLightOptions
