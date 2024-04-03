import {
  AlertTriangle,
  AppWindow,
  ArrowLeft,
  ArrowRight,
  Baseline,
  Bell,
  Calendar,
  Check,
  ChefHat,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  ClipboardCheck,
  Cloud,
  Command,
  ConciergeBell,
  Copy,
  CreditCard,
  Download,
  DownloadCloud,
  Edit,
  ExternalLink,
  File,
  FileText,
  Folder,
  GripVertical,
  Group,
  HelpCircle,
  icons,
  Image,
  Inbox,
  Info,
  KeyRound,
  Languages,
  Laptop,
  Layers,
  Link,
  Loader,
  icons as LucideIcons,
  LucideProps,
  Moon,
  MoreVertical,
  Paintbrush,
  Pizza,
  Plus,
  RefreshCcw,
  Ruler,
  Settings,
  ShoppingCart,
  SunMedium,
  Trash,
  Twitter,
  Upload,
  UploadCloud,
  User,
  Users,
  Wrench,
  X,
} from "lucide-react";

import { cn } from "./lib/utils";

export * from "lucide-react";

export type IconType = keyof typeof LucideIcons | keyof typeof Icons;

export const Icons = {
  // Sites Icons
  appWindow: AppWindow,
  // Menu Icons
  chefHat: ChefHat,
  // file icons
  cloud: Cloud,
  upload: Upload,
  uploadCloud: UploadCloud,
  download: Download,
  downloadCloud: DownloadCloud,
  // Bio Link
  link: Link,
  // Catalouge
  layers: Layers,
  baseline: Baseline,
  group: Group,
  folder: Folder,
  ruler: Ruler,
  paintbrush: Paintbrush,
  wrench: Wrench,
  close: X,
  calendar: Calendar,
  shoppingCart: ShoppingCart,
  languages: Languages,
  spinner: Loader,
  edit: Edit,
  info: Info,
  gripVertical: GripVertical,
  refresh: RefreshCcw,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUpDown: ChevronsUpDown,
  trash: Trash,
  post: FileText,
  file: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  externalLink: ExternalLink,
  warning: AlertTriangle,
  user: User,
  users: Users,
  conciergeBell: ConciergeBell,
  arrowRight: ArrowRight,
  inbox: Inbox,
  help: HelpCircle,
  pizza: Pizza,
  twitter: Twitter,

  check: Check,
  copy: Copy,
  copyDone: ClipboardCheck,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  bell: Bell,
  key: KeyRound,
  arrowLeft: ArrowLeft,
  apps: (props: LucideProps) => (
    <svg focusable="false" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
    </svg>
  ),
  forwardSlash: (props: LucideProps) => (
    <svg
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M16.88 3.549L7.12 20.451"></path>
    </svg>
  ),
  system: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.497 8.498 8.497z"
        fillRule="nonzero"
        fill="currentColor"
      />
    </svg>
  ),
  facebook: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
      {...props}
    >
      <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
      <path
        fill="#fff"
        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
      ></path>
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),

  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_2"
      viewBox="0 0 69.99 69.99"
      fill="currentColor"
      {...props}
    >
      <path
        id="SVGID"
        className="cls-1"
        d="M27.97,29.29l1.99,.12h0c.66,.05,1.33,.09,2,.14h0c2.88,.19,5.75,.4,8.69,.43,1.71,.02,2.71-.18,2.98-.62,.27-.45,0-1.44-.85-3.03-1.41-2.66-2.97-5.38-4.51-8.08-.63-1.09-1.25-2.18-2.14-3.77-.55-.99-1.16-1.72-1.76-2.13-.32-.22-.59-.33-.8-.33-.16,0-.33,.1-.53,.29-.35,.35-.68,.93-.98,1.77-.45,1.3-1.55,5.52-2.92,10.72-.3,1.13-.61,2.31-.93,3.51l-3.82-.23,1.11-4.23c1.37-5.22,2.48-9.44,3.01-10.98,.49-1.4,1.13-2.46,1.88-3.2,.91-.89,1.94-1.33,3.05-1.37,1.05-.04,2.1,.31,3.07,.99,1.04,.73,2.03,1.87,2.87,3.37,.5,.88,1.31,2.31,2.14,3.75,1.56,2.74,3.15,5.51,4.57,8.18,1.52,2.86,1.74,5.09,.72,6.76-1.03,1.66-3.11,2.44-6.21,2.41-3.04-.04-5.97-.24-8.9-.44h0c-1.49-.11-2.99-.21-4.72-.3h0s-3.8-.21-3.8-.21v-.03c-1.25-.06-1.95,.02-2.29,.52-1.35,1.98-2.15,7.52-2.32,12.36-.06,1.64-.04,3.18,.06,4.46,.85-3.21,2.55-9.67,4.29-16.31l3.8,.21c-2.99,10.95-6.44,22.03-8.8,21.95-.45-.02-.86-.15-1.22-.4-.92-.63-1.47-2.16-1.71-4.2-.18-1.61-.23-3.67-.16-5.85,.19-5.4,1.2-11.76,2.96-14.34,1.55-2.27,3.21-2.31,6.37-2.1l3.82,.23"
      />
      <path
        className="cls-1"
        d="M22.77,59.9c-.87-.49-1.34-1.51-1.1-2.53,.3-1.23,1.53-1.98,2.76-1.68,11.79,2.85,23.82-2.75,29.25-13.62,6.39-12.78,1.19-28.38-11.6-34.77C29.3,.91,13.7,6.11,7.31,18.9c-4.67,9.34-3.3,20.5,3.48,28.44,.82,.96,.71,2.4-.25,3.22-.96,.82-2.4,.71-3.22-.25C-.65,40.97-2.26,27.84,3.23,16.86,10.74,1.82,29.09-4.3,44.13,3.21c15.04,7.51,21.16,25.86,13.64,40.9-3.1,6.2-8.28,11.21-14.57,14.09-6.2,2.84-13.25,3.52-19.84,1.93-.21-.05-.41-.13-.59-.23Z"
      />
    </svg>
  ),
};

interface IconProps extends Omit<LucideProps, "ref"> {
  name: IconType;
}

export const Icon = ({ name, className, ...props }: IconProps) => {
  const LucideIcon = getIcon(name);

  if (!LucideIcon) return null;
  return (
    <LucideIcon {...props} className={cn("rtl:flip-x h-4 w-4", className)} />
  );
};

export const getIcon = (name: IconType) => {
  const LucideIcon = { ...Icons, ...LucideIcons }[name];

  return LucideIcon || null;
};
