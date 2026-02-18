export default function getPakistanTime() {
    return new Date().toLocaleString("en-PK", {
        timeZone: "Asia/Karachi",
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
          });
}