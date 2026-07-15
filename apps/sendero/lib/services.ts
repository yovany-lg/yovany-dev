import { Globe, Smartphone, Bot, MessageCircleMore } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceKey = "web" | "mobile" | "ai" | "whatsapp";

export const SERVICES: { key: ServiceKey; icon: LucideIcon }[] = [
  { key: "web", icon: Globe },
  { key: "mobile", icon: Smartphone },
  { key: "ai", icon: Bot },
  { key: "whatsapp", icon: MessageCircleMore },
];
