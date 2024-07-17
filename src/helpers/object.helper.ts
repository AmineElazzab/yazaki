export function filterEmptyFields(obj: any): any {
  return Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(obj).filter(([_, v]) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      typeof v === "string";
      return (
        (typeof v !== "string" && v != null) ||
        (typeof v === "string" && v?.length > 0)
      );
    }),
  );
}
