export function LongDate({ date }) {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const result = date.toLocaleDateString("th-TH", options);
    return result;
};

export function ShortDate({ date }) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const result = date.toLocaleDateString("th-TH", options);
    return result;
};
