export interface WorkDay {
  isOpen?: boolean;
  from?: string;
  to?: string;
}

export const formatBirthday = (
  birthday?: string | number | Date | null,
): string => {
  if (!birthday) return "";

  const date = new Date(birthday);

  // Geçersiz bir tarih (Invalid Date) gönderilmişse boş döndürür
  if (isNaN(date.getTime())) return "";

  return date
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, ".");
};

export const formatDate = (date?: string | null): string => {
  if (!date) return "";

  // Sadece ISO formatındaki tarihlerin (örn: 2024-01-01T12:00:00Z) "T"ye kadar olan kısmını ayırır
  const dateStr = date.split("T")[0];
  const dateObj = new Date(dateStr);

  if (isNaN(dateObj.getTime())) return "";

  const day = dateObj.getDate().toString().padStart(2, "0");
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObj.getFullYear();

  return `${day}/${month}/${year}`;
};

export const noScroll = (isShowMobileMenu: boolean): (() => void) => {
  // Vite gibi ortamlarda SSR yapılıyorsa veya Test koşuluyorsa uygulamanın çökmemesi için window kontrolü
  if (typeof window !== "undefined") {
    if (isShowMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  // Component unmount (temizlik) anı için cleanup fonksiyonu
  return () => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };
};

export const workHours = (workDays?: WorkDay[]): string | undefined => {
  // Gelen veri bir dizi değilse veya boşsa güvenli çıkış
  if (!Array.isArray(workDays) || workDays.length === 0) {
    return undefined;
  }

  const firstOpenDay = workDays
    .filter((day) => day?.isOpen)
    .map((day) => {
      const fromTime = day.from ? day.from.slice(0, 5) : "00:00";
      const toTime = day.to ? day.to.slice(0, 5) : "00:00";
      return `${fromTime} - ${toTime}`;
    });

  return firstOpenDay[0];
};
