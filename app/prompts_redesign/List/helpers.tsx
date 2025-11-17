import {
  GoogleIcon,
  ChatGPTIcon,
  PerplexityIcon,
  GeminiIcon,
  RedditIcon,
} from "../Icons/icons";

export function SourceIcon({ source }: { source: string }) {
  const iconMap: Record<string, React.ReactElement> = {
    google: <GoogleIcon />,
    chatgpt: <ChatGPTIcon />,
    perplexity: <PerplexityIcon />,
    gemini: <GeminiIcon />,
    reddit: <RedditIcon />,
  };

  return iconMap[source.toLowerCase()] || null;
}
