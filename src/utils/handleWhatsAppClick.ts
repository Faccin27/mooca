export function handleWhatsAppClick(label: string) {
  if (
    typeof window !== "undefined" &&
    typeof (window as any).gtag === "function"
  ) {
    (window as any).gtag("event", "click", {
      event_category: "WhatsApp",
      event_label: label,
    });
  }
}
